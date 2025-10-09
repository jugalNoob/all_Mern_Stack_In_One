🧩 MongoDB Array Update Operators


| Operator                        | Description                                                          | Example                                                                                                            |
| ------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `$pull`                         | Removes **all array elements** that match a condition                | `db.users.updateOne({ _id: 1 }, { $pull: { skills: "PHP" } })` → removes "PHP" from `skills` array                 |
| `$pop`                          | Removes the **first or last element** of an array                    | `db.users.updateOne({ _id: 1 }, { $pop: { skills: 1 } })` → removes **last element** (`-1` removes first element)  |
| `$pullAll`                      | Removes **multiple specific values** from an array                   | `db.users.updateOne({ _id: 1 }, { $pullAll: { skills: ["PHP", "Java"] } })`                                        |
| `$push`                         | Adds elements to an array                                            | `db.users.updateOne({ _id: 1 }, { $push: { skills: "Node.js" } })`                                                 |
| `$` (Positional Operator)       | Updates the **first array element that matches the query condition** | `db.users.updateOne({ "skills": "PHP" }, { $set: { "skills.$": "Python" } })` → replaces first "PHP" with "Python" |
| `$[]` (All Positional Operator) | Updates **all elements in an array**                                 | `db.users.updateOne({}, { $set: { "skills.$[]": "UpdatedSkill" } })` → updates all array elements                  |
