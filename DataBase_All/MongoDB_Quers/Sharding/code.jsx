🧠 1️⃣ Choose the Right Shard Key Before Inserting

You must enable sharding on the database and shard the collection with a shard key (e.g. id) before inserting data.

Here’s how you do it in MongoDB shell (or Compass → Command Line):

// Step 1: Enable sharding on the database
sh.enableSharding("school")

// Step 2: Shard the collection with a shard key (e.g. id)
sh.shardCollection("school.students", { id: 1 })


👉 This tells MongoDB to distribute documents based on id across shards.

🧠 2️⃣ Then Use insertMany()

Once sharding is enabled, you can run your insert:

db.students.insertMany([
  { id: 1, name: "Karan", class: "10th" },
  { id: 2, name: "Karan", class: "10th" },
  { id: 3, name: "Karan", class: "10th" }
]);


✅ Behind the scenes:

Document with id:1 goes to Shard 1

Document with id:2 goes to Shard 2

Document with id:3 goes to Shard 3

All stored in the same logical collection school.students.

🧰 3️⃣ If You're Using MongoDB Compass

You can also enable sharding via Compass’s “Command Line Interface” tab:

Open Compass → Connect to your mongos router

Click “Command Line” icon (top right corner)

Run:

sh.enableSharding("school")
sh.shardCollection("school.students", { id: 1 })


Then use Compass Insert Document or Run insertMany.

🧠 4️⃣ Verify Sharding

After inserting, run this to check distribution:

sh.status()


👉 It will show chunks and which shard holds which id range.

📝 Quick Recap



| Step | Command                                            | Purpose                         |
| ---- | -------------------------------------------------- | ------------------------------- |
| 1️⃣  | `sh.enableSharding("school")`                      | Turn on sharding for the DB     |
| 2️⃣  | `sh.shardCollection("school.students", { id: 1 })` | Pick shard key                  |
| 3️⃣  | `db.students.insertMany([...])`                    | Insert data, mongos auto-routes |
| 4️⃣  | `sh.status()`                                      | Check shards distribution       |



::::::::::::: ------------------->>>Step By step :::::::::::::::::::::::::::::::::::::::::::::::::


🧠 Step 0: Decide Number of Nodes

Before you start sharding, decide:

How many config servers

How many shard servers

How many mongos routers

📝 Example:



| Component      | Count                                                        | Purpose                   |
| -------------- | ------------------------------------------------------------ | ------------------------- |
| Config Servers | 3                                                            | Store metadata (required) |
| Mongos Routers | 1                                                            | Routes client requests    |
| Shards         | 2 shards × 1 node each (min) OR 3 per shard for replica sets | Store data                |



data

👉 So total nodes = 1 mongos + 3 config + 2 shards = 6 nodes (minimum realistic cluster).

🧰 Step 1: Start Config Servers
mongod --configsvr --replSet configReplSet --port 27019 --dbpath /data/config1
mongod --configsvr --replSet configReplSet --port 27020 --dbpath /data/config2
mongod --configsvr --replSet configReplSet --port 27021 --dbpath /data/config3


Then in mongosh:

rs.initiate({
  _id: "configReplSet",
  configsvr: true,
  members: [
    { _id: 0, host: "localhost:27019" },
    { _id: 1, host: "localhost:27020" },
    { _id: 2, host: "localhost:27021" }
  ]
})

🧰 Step 2: Start Shard Nodes
Example: 2 shards
mongod --shardsvr --replSet shard1 --port 27018 --dbpath /data/shard1
mongod --shardsvr --replSet shard2 --port 27028 --dbpath /data/shard2


Initialize each shard as replica set (even if single node):

// For Shard 1
mongosh --port 27018
rs.initiate({
  _id: "shard1",
  members: [{ _id: 0, host: "localhost:27018" }]
})

// For Shard 2
mongosh --port 27028
rs.initiate({
  _id: "shard2",
  members: [{ _id: 0, host: "localhost:27028" }]
})


👉 Here you choose node count by deciding how many shard processes you start.

🧰 Step 3: Start Mongos Router
mongos --configdb configReplSet/localhost:27019,localhost:27020,localhost:27021 --port 27017


👉 All your client apps connect to this mongos.

🧠 Step 4: Add Shards to Cluster

In mongosh --port 27017 (mongos):

sh.addShard("shard1/localhost:27018")
sh.addShard("shard2/localhost:27028")


✅ Now your cluster knows there are 2 shard nodes.

🧠 Step 5: Enable Sharding & Choose Shard Key
sh.enableSharding("school")
sh.shardCollection("school.students", { id: 1 })


✅ At this point, the number of nodes is already fixed by how many shard servers you added with sh.addShard().

🧠 Step 6: Insert Data
use school
db.students.insertMany([
  { id: 1, name: "Karan", class: "10th" },
  { id: 2, name: "Aryan", class: "10th" },
  { id: 3, name: "Meena", class: "10th" },
  { id: 4, name: "Ravi", class: "10th" },
  { id: 5, name: "Simran", class: "10th" }
])


Mongos automatically routes each document to the correct shard based on { id: 1 } key.

🧠 Step 7: Check Distribution
sh.status()


You’ll see something like:

sharding version: ...
shards:
  {  "_id" : "shard1",  "host" : "shard1/localhost:27018",  ... }
  {  "_id" : "shard2",  "host" : "shard2/localhost:27028",  ... }
databases:
  {  "_id" : "school",  "partitioned" : true, ... }
    school.students
      shard key: { "id" : 1 }
      chunks:
        shard1  1 chunk(s)
        shard2  1 chunk(s)


✅ Now data is split between 2 shard nodes.



| Action             | Command / Config                         |
| ------------------ | ---------------------------------------- |
| Choose node number | Start that many `mongod` processes       |
| Add shard nodes    | `sh.addShard()`                          |
| Enable sharding    | `sh.enableSharding("db")`                |
| Shard collection   | `sh.shardCollection("db.coll", { key })` |
| Insert data        | `db.coll.insertMany()`                   |
| Check distribution | `sh.status()`                            |
