📚 MongoDB Operators Cheat Sheet
1️⃣ Date Operators


| Operator      | Description              | Example                                                   |
| ------------- | ------------------------ | --------------------------------------------------------- |
| `$year`       | Extracts year            | `{ $expr: { $eq: [{ $year: "$eventDate" }, 2024] } }`     |
| `$month`      | Extracts month           | `{ $expr: { $eq: [{ $month: "$eventDate" }, 3] } }`       |
| `$dayOfMonth` | Day of month             | `{ $expr: { $eq: [{ $dayOfMonth: "$eventDate" }, 15] } }` |
| `$dayOfWeek`  | 1 = Sunday, 7 = Saturday | `{ $expr: { $eq: [{ $dayOfWeek: "$eventDate" }, 1] } }`   |
| `$dayOfYear`  | Day count from Jan 1st   | `{ $expr: { $eq: [{ $dayOfYear: "$eventDate" }, 100] } }` |
| `$week`       | Week of the year         | `{ $expr: { $eq: [{ $week: "$eventDate" }, 12] } }`       |


2️⃣ Arithmetic Operators


| Operator    | Description                      | Example                                   |
| ----------- | -------------------------------- | ----------------------------------------- |
| `$add`      | Adds numbers or dates            | `{ $add: ["$price", 10] }`                |
| `$subtract` | Subtracts numbers or dates       | `{ $subtract: ["$price", 5] }`            |
| `$multiply` | Multiplies numbers               | `{ $multiply: ["$price", 2] }`            |
| `$divide`   | Divides numbers                  | `{ $divide: ["$price", 2] }`              |
| `$mod`      | Remainder of division            | `{ $mod: ["$price", 3] }`                 |
| `$abs`      | Absolute value                   | `{ $abs: { $subtract: ["$price", 50] } }` |
| `$ceil`     | Round up                         | `{ $ceil: "$price" }`                     |
| `$floor`    | Round down                       | `{ $floor: "$price" }`                    |
| `$round`    | Round to nearest integer/decimal | `{ $round: ["$price", 2] }`               |



3️⃣ Field Update Operators


| Operator  | Description                           | Example                               |
| --------- | ------------------------------------- | ------------------------------------- |
| `$max`    | Updates field if value is **greater** | `{ $max: { score: 90 } }`             |
| `$min`    | Updates field if value is **less**    | `{ $min: { score: 50 } }`             |
| `$inc`    | Increment/decrement a field           | `{ $inc: { score: 5 } }`              |
| `$mul`    | Multiply field value                  | `{ $mul: { score: 2 } }`              |
| `$rename` | Rename a field                        | `{ $rename: { oldName: "newName" } }` |
