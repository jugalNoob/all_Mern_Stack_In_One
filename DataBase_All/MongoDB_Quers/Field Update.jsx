Field Update Operators


MongoDB – Field Update Operators
MongoDB – Maximum operator ( $max )
MongoDB – Minimum operator ( $min )
MongoDB – Increment Operator ( $inc )
MongoDB – Multiply Operator ($mul)
MongoDB – Rename Operator ($rename)


📌 MongoDB Field Update Operators


| Operator  | Description                                                                    | Example                                                                                                     |
| --------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| `$max`    | Updates the field if the specified value is **greater** than the current value | `db.collection.updateOne({ _id: 1 }, { $max: { score: 90 } })` → updates `score` only if current value < 90 |
| `$min`    | Updates the field if the specified value is **less** than the current value    | `db.collection.updateOne({ _id: 1 }, { $min: { score: 50 } })` → updates `score` only if current value > 50 |
| `$inc`    | **Increments (or decrements)** the value of a field by a specified amount      | `db.collection.updateOne({ _id: 1 }, { $inc: { score: 5 } })` → adds 5 to `score`                           |
| `$mul`    | **Multiplies** the value of a field by a specified amount                      | `db.collection.updateOne({ _id: 1 }, { $mul: { score: 2 } })` → doubles `score`                             |
| `$rename` | **Renames a field** in the document                                            | `db.collection.updateOne({ _id: 1 }, { $rename: { oldName: "newName" } })`                                  |




💡 Notes:

These operators are used with update operations like updateOne(), updateMany().

Can be combined in a single update:

db.collection.updateOne(
  { _id: 1 },
  { 
    $inc: { score: 5 },
    $max: { highScore: 100 },
    $rename: { oldField: "newField" }
  }
)
