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
