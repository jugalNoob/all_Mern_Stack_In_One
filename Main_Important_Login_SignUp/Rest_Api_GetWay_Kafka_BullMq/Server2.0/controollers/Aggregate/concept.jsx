--- >> Db.collection.aggregate(pipeline , option )



1: --> match  name any one 

 const resultShow = await RegisterGet.aggregate([
        {match:{gender:'male'}}
    ])

--> Group Aggration :::: >>>>  :::::::::::: -----------------------------------------


    10 year 10 student one group  and 20 year stsudent second group 

    //-->each age value show different 

    const resultShow = await RegisterGet.aggregate([ // Simple 
 {$group:{
    _id:'$age'
 }}
    ])
  

    
    const resultShows = await RegisterGet.aggregate([ // Simple 
 {$group:{
    _id:'$age' ,name:{$push:$name}
 }}
    ])


        const resultShows = await RegisterGet.aggregate([ // Simple 
     {$group:{
        _id:'$age' ,poorDoc:{$push:'$$Root'}
     }}
        ])
      
  
const resultShows = await RegisterGet.aggregate([
  { $match: { gender: 'male' } },        // filter only males
  {
    $group: {                             // group by age
      _id: "$age",                        // _id is the field you group by
      countoftecherinthisagegroup: { $sum: 1 }                 // count documents per age
    }
  }
]);


const resultShows = await RegisterGet.aggregate([
  { $match: { gender: 'male' } },        // filter only males
  {
    $group: {                             // group by age
      _id: "$age",                        // _id is the field you group by
      countoftecherinthisagegroup: { $sum: 1 }    ,
      
      // count documents per age
    }
  },{$sort:{countoftecherinthisagegroup:-1}}
]);

const resultShows = await RegisterGet.aggregate([
  { $match: { gender: 'male' } },        // filter only males
  {
    $group: {                             // group by age
      _id: "$age",                        // _id is the field you group by
      countoftecherinthisagegroup: { $sum: 1 }}},
      {$sort:{countoftecherinthisagegroup:-1}}
]);


0::double age number
const resultShows = await RegisterGet.aggregate([ /// 
  { $match: { gender: 'male' } },        // filter only males
  {
    $group: {                             // group by age
      _id: "$age",                        // _id is the field you group by
      countoftecherinthisagegroup: { $sum: {$toDouble:'age'} }}},
]);


0::check array hoobies with group 

  
const resultShows = await RegisterGet.aggregate([ //check hobbies simple

   {  $group:{_id:'age',hobbies:{$push'$hobbies'}}}
]);



::::::::: Unwind for search hobbies array  ::::::::::::::::::::::::::::::::::::::::::

  
const resultShows = await RegisterGet.aggregate([ //check hobbies simple

   {$unwind:'$hobbies' }
]);

const resultShows = await RegisterGet.aggregate([ //check hobbies simple

   {  $group:{_id:'age',hobbies:{$push'$hobbies'}}}
]);


const resultShows = await RegisterGet.aggregate([
  { $unwind: "$hobbies" },                // explode hobbies array
  {
    $group: {
      _id: "$age",                        // group by age
      hobbies: { $push: "$hobbies" }      // collect all hobbies per age
    }
  }
]);


const resultShows = await RegisterGet.aggregate([
  { $unwind: "$hobbies" },                   // explode hobbies array
  { 
    $group: {
      _id: "$hobbies",                        // group by each hobby
      count: { $sum: 1 }                      // count how many times each hobby appears
    } 
  }
]);


0:check hoobies averageAge
const resultShows = await RegisterGet.aggregate([ 
  { $unwind: "$hobbies" },                  // explode hobbies array
  { 
    $group: {
      _id: "$hobbies",                       // group by each hobby
      averageAge: { $avg: "$age" }           // calculate average age per hobby
    } 
  }
]);

0:: count of hoobies 

const resultShows = await RegisterGet.aggregate([
  {
    $group: {
      _id: null,                            // single group for all docs
      totalHobbies: { $sum: { $size: "$hobbies" } }  // sum of array lengths
    }
  }
]);


    
0: all hobbies array one show one array
const resultShows = await RegisterGet.aggregate([
  { $unwind: "$hobbies" },                     // explode hobbies array
  { 
    $group: {
      _id: null,                               // single group for all docs
      allHobbies: { $push: "$hobbies" }       // collect all hobbies into one array 

         allHobbies: { $addtoset: "$hobbies" }   //if array is douplate remove
     
    }
  }
]);


:::::::::::::::::::::::::: Fitler aggregate::::::::::::::::::::::::::::



const resultShows = await RegisterGet.aggregate([
  {
    $group: {
      _id: null,
      avgScore: {
        $avg: {
          $avg: {   // average of filtered array per document
            $filter: {
              input: "$socers",          // array to filter
              as: "score",
              cond: { $gte: ["$age", 20] } // include only scores >= 20
            }
          }
        }
      }
    }
  }
]);


:::::::::   Bucket Operator ::::::::::::::::::::::::::::::::::::::::::::::

const resultShows = await RegisterGet.aggregate([
  { $match: { gender: "male" } },    // filter only male users
  {
    $bucket: {
      groupBy: "$age",                // field to group
      boundaries: [0, 30, 40],        // define ranges: 0-29, 30-39
      default: "40+",                 // age >= 40 goes here
      output: {
        count: { $sum: 1 }            // count documents per bucket
      }
    }
  }
]);

const resultShows = await RegisterGet.aggregate([
  { $match: { gender: "male" } },    // filter only male users
  {
    $bucket: {
      groupBy: "$age",                // field to group
      boundaries: [0, 30, 40],        // define ranges: 0-29, 30-39
      default: "40+",                 // age >= 40 goes here
      output: {
        count: { $sum: 1 },
        name:{$push:'name'}            // count documents per bucket
      }
    }
  }
]);

::::::::::::::::: LoackUp operatore ::::::::::::::::::::::::::::::::


