💡 Bonus: Querying Nested Fields

MongoDB allows querying nested arrays and objects easily:

🧺 Querying Arrays in MongoDB

| Operator     | Purpose                                                             | Example                                                                                                                                                                                           |
| ------------ | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$size`      | Match arrays with **exact number of elements**                      | `db.users.find({ skills: { $size: 5 } })` <br> `db.dataall.find({ experience: { $size: 3 } })`                                                                                                    |
| `$all`       | Match if **all specified values exist** in the array                | `db.students.find({ hobbies: { $all: ["jugal", "sharma"] } })`                                                                                                                                    |
| `$in`        | Match if **any value from list exists** in the array                | `db.students.find({ hobbies: { $in: ["jugal", "sharma"] } })`                                                                                                                                     |
| `$elemMatch` | Match if a **single array element** matches **multiple conditions** | `js db.users.find({ projects: { $elemMatch: { duration: { $gt: 12 }, role: "Manager" } } }) ` <br> `js db.dataall.find({ experience: { $elemMatch: { company: "Amazon", role: "Engineer" } } }) ` |


db.students.find({ "projects.name": "Website" })  // match nested field in array of objects
db.users.find({ "experience.company": "Google" }) // nested array object query