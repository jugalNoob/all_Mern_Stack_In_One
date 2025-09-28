// const RegisterGet = require("../model/Apistudent");

// // GET /api/users?gender=male&minAge=20&maxAge=40&country=India&limit=5
// exports.Aggress = async (req, res) => {
//   const { name, country, minAge, maxAge, gender, limit } = req.query;

//   try {
//     let filter = {};

//     if (name) filter.name = name;
//     if (gender) filter.gender = gender;
//     if (country) filter.country = country;

//     if (minAge || maxAge) {
//       filter.age = {};
//       if (minAge) filter.age.$gte = parseInt(minAge);
//       if (maxAge) filter.age.$lte = parseInt(maxAge);
//     }

//     const resultShow = await RegisterGet.aggregate([
//       { $match: filter }, // apply dynamic filters
//       {
//         $facet: {
//           users: [
//             { $sort: { age: -1 } },
//             { $limit: limit ? parseInt(limit) : 5 },
//             {
//               $project: {
//                 name: 1,
//                 age: 1,
//                 gender: 1,
//                 country: 1,
//                 _id: 0
//               }
//             }
//           ],
//           totalCount: [
//             { $count: "count" }
//           ],
//           femaleCount: [
//             { $match: { gender: "female" } },
//             { $count: "count" }
//           ]
//         }
//       }
//     ]);

//     // resultShow is always an array with 1 object inside when using $facet
//     res.json(resultShow[0]);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// ---->> Aggregation 




// GET /api/users?country=India&minAge=20&maxAge=40&limit=3



// exports.Aggress = async (req, res) => {
//     try {
//         const resultShow = await  RegisterGet .aggregate([
//             { 
//                 $sort: { "age": -1}  // sort age 
//               },
//             {
//                 $match: { gender: "female" } // Use $match stage separately
//             },
//             {
//                 $group: {
//                     _id: "$age",
//                     userInfo: {
//                         $push: {
//                             name: "$name",
//                             gender: "$gender",
//                             age:"$age",
//                             hobbies: "$hobbies",
//                             identity:"$identity",
//                             bio:"$bio",
//                             country:"$country",
//                             isEligible:"$isEligible"
//                         }
//                     }
//                 }
//             },
//             {
//                 $limit: 5 // Place the $limit stage here to limit the number of results
//             }
//         ]);

//         const totalDocumentCount = await RegisterGet.countDocuments({});
//         console.log(totalDocumentCount, "totaldocument");

//         // console.log(resultShow);
//         res.send(resultShow);
//     } catch (error) {
//         // Handle errors here
//         console.error(error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };
