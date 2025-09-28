const RegisterGet = require("../model/Apistudent");
const redisClient = require("../redis/redisClient"); // make sure you imported redis

// GET /api/users?gender=male&minAge=20&maxAge=40&country=India&limit=5
exports.Aggress = async (req, res) => {
  const { name, country, minAge, maxAge, gender, limit } = req.query;

  try {
    const TTL = 30; // cache time in seconds
    const cacheKey = `users:agg:${JSON.stringify(req.query)}`; // unique per query

    // 1️⃣ Check Redis first
    const cached = await redisClient.get(cacheKey);
    if (cached) {
      console.log("✅ Cache hit");
      return res.json(JSON.parse(cached));
    }

    console.log("❌ Cache miss → fetching from MongoDB");

    // 2️⃣ MongoDB aggregation
    const resultShow = await RegisterGet.aggregate([
      { 
        $match: { gender: "name" }  // you can also use dynamic filters from query here
      },
      { 
        $group: { 
          _id: "$age",
          hobbies: { $push: "$hobbies" },
          name: { $push: "$name" },
          count: { $sum: 1 },
          averageAge: { $avg: "$age" }
        }
      },
        { $limit: 5 } // ✅ only take first 5 groups
    ]);

    // 3️⃣ Save to Redis
    await redisClient.setEx(cacheKey, TTL, JSON.stringify(resultShow));

    res.json(resultShow[0]); // ⚠️ currently only returns first group
  } catch (error) {
    console.error("❌ Aggregation error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



/// ---- >>>const resultShows = await RegisterGet.aggregate([
//   { $match: { gender: "male" } }, // filter only male users
//   {
//     $bucket: {
//       groupBy: "$age",                 // group by age field
//       boundaries: [0, 30, 40],         // buckets: 0–29, 30–39
//       default: "40+",                  // everything >= 40 goes here
//       output: {
//         count: { $sum: 1 },            // total users in this bucket
//         names: { $push: "$name" },     // collect names
//         hobbies: { $push: "$hobbies" } // collect hobbies if needed
//       }
//     }
//   }
// ]);
