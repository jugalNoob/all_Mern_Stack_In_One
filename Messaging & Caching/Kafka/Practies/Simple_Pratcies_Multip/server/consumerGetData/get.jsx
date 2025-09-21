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
