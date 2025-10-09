https://www.geeksforgeeks.org/mongodb/mongodb-tutorial/

8::: how to delete database in Monhodb ? .....................


CRUD Operations in MongoDB
In this section we will explores CRUD operations, Create, Read, Update, 
and Delete. Learn how to effectively insert, retrieve, modify, and
remove documents within your MongoDB collections. This 
empowers you to manage your database with precision.

CRUD Operations in MongoDB
MongoDB - Create Database
MongoDB - Drop Database
MongoDB - Create Collection
MongoDB - Drop Collection
Create Database using MongoDB Compass
Create Database using MongoShell


1::show dbs
2::use Ones
3::db.alldata.find()
db.users.countDocuments()
db.createCollection("newUser")
db.url.renameCollection("fuckOf")
db.users.deleteMany({}) //  all uses deletes 
//Delete collection

db.dataall.drop()
db.users.getFullName()
ones.users

|||||||collection||||||||
db.dataall.drop()
db.users.getFullName()
db.users.countDocuments()
db.createCollection("newUser")
db.url.renameCollection("Of")
db.newUser.remove({ name: "John" })


// mongodb+srv://jugal786:jugal786@cluster0.sgg8t.mongodb.net/ones?retryWrites=true&w=majority