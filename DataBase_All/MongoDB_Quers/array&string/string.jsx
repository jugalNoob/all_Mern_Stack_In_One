MongoDB $concat Operator
MongoDB $strcasecmp Operator
MongoDB $toUpper Operator
MongoDB $toLower Operator
$substrCP (aggregation) operator in MongoDB

📝 MongoDB String Operators (Aggregation)


| Operator      | Description                                               | Example                                                                                                  |
| ------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `$concat`     | Concatenates **two or more strings**                      | `{ $concat: ["$firstName", " ", "$lastName"] }` → combines first and last name                           |
| `$strcasecmp` | Compares **two strings case-insensitively**               | `{ $strcasecmp: ["$name1", "$name2"] }` → returns 0 if equal, <0 if first < second, >0 if first > second |
| `$toUpper`    | Converts a string to **uppercase**                        | `{ $toUpper: "$name" }` → "jugal" becomes "JUGAL"                                                        |
| `$toLower`    | Converts a string to **lowercase**                        | `{ $toLower: "$NAME" }` → "NAME" becomes "name"                                                          |
| `$substrCP`   | Returns a **substring using code points** (Unicode-aware) | `{ $substrCP: ["$name", 0, 4] }` → returns first 4 characters of `name`                                  |



💡 Notes:

These are string expression operators used in aggregation pipelines ($project, $addFields, $group).

$substrCP is Unicode-safe, unlike $substrBytes.

$concat can combine multiple fields or strings, e.g., for full names or addresses.

If you want, I can make a complete MongoDB Aggregation Operators Cheat Sheet, combining:

Date Operators

Arithmetic Operators

Array Operators

Field Update Operators

String Operators

…all in one big table, ready for interview prep.