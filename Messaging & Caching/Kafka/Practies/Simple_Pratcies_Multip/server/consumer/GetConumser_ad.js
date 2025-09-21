// consumer.js
const kafka = require("../client/client");
const connectDB = require("../db/conn");

async function initConsumer() {
  const consumer = kafka.consumer({ groupId: "user-consumer-group" });

  try {
    await connectDB();
    console.log("✅ MongoDB connected");

    await consumer.connect();
    console.log("✅ Kafka Consumer connected");

    await consumer.subscribe({ topic: "get_user", fromBeginning: false });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        try {
          const value = message.value.toString();
          const parsed = JSON.parse(value);

          console.log(`📩 Topic: ${topic} | Partition: ${partition}`);
          console.log("👤 Users received:", parsed);

        } catch (err) {
          console.error("❌ Failed to parse message:", err.message);
        }
      },
    });

    process.on("SIGINT", async () => {
      console.log("🛑 Disconnecting Kafka consumer...");
      await consumer.disconnect();
      process.exit(0);
    });

  } catch (err) {
    console.error("❌ Consumer init error:", err.message);
    process.exit(1);
  }
}

initConsumer();


/// -----> consumer get real world exmaple  ---------------------->>>


// controller/getUser.js
const redis = require("../redis-client");
const kafkaProducer = require("../kafka/producer");

async function getUser(req, res) {
  const userId = req.params.id;

  // 1. Try Redis
  const cachedUser = await redis.get(`user:${userId}`);
  if (cachedUser) {
    return res.json(JSON.parse(cachedUser));
  }

  // 2. If not in Redis → publish a Kafka "fetch_user" request
  await kafkaProducer.send({
    topic: "fetch_user",
    messages: [{ key: userId, value: JSON.stringify({ userId }) }],
  });

  // 3. Temporary response (async refresh pattern)
  return res.status(202).json({
    message: "User not found in cache. Fetching from DB, try again shortly.",
  });
}

module.exports = getUser;






// kafka/consumers/fetchUserConsumer.js
const kafka = require("../kafkaClient");
const redis = require("../redis-client");
const User = require("../models/student");

async function run() {
  const consumer = kafka.consumer({ groupId: "user-fetch-group" });
  await consumer.connect();
  await consumer.subscribe({ topic: "fetch_user" });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const { userId } = JSON.parse(message.value.toString());

      // Fetch from DB
      const user = await User.findById(userId);

      if (user) {
        // Store in Redis for next time
        await redis.set(
          `user:${userId}`,
          JSON.stringify(user),
          "EX",
          3600 // 1 hour TTL
        );
      }
    },
  });
}

run().catch(console.error);
