Array Expression Operators
MongoDB $isArray Operator
MongoDB $size Operator
MongoDB $arrayElemAt Operator
MongoDB $concatArrays Operator
MongoDB $reverseArray Operator


📌 MongoDB Array Expression Operators


| Operator        | Description                                                  | Example                                                                      |
| --------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| `$isArray`      | Checks if a value is an **array**; returns `true` or `false` | `{ $isArray: "$tags" }` → true if `tags` is an array                         |
| `$size`         | Returns the **number of elements** in an array               | `{ $size: "$tags" }` → returns array length                                  |
| `$arrayElemAt`  | Returns the element at a **specified index** in an array     | `{ $arrayElemAt: [ "$tags", 2 ] }` → returns 3rd element (index starts at 0) |
| `$concatArrays` | **Concatenates multiple arrays** into one                    | `{ $concatArrays: [ "$tags", "$categories" ] }`                              |
| `$reverseArray` | Returns the array in **reverse order**                       | `{ $reverseArray: "$tags" }` → reverses the array                            |



💡 Notes:

These operators are mainly used in aggregation pipelines: $project, $addFields, $group.

They can be combined with other operators for complex transformations:

db.products.aggregate([
  {
    $project: {
      tagCount: { $size: "$tags" },
      firstTag: { $arrayElemAt: [ "$tags", 0 ] },
      allTagsReversed: { $reverseArray: "$tags" }
    }
  }


  db.products.aggregate([
  {
    $project: {
      totalTags: { $size: "$tags" },               // Count of array elements
      firstTag: { $arrayElemAt: [ "$tags", 0 ] },  // First element
      reversedTags: { $reverseArray: "$tags" },    // Reversed array
      isTagsArray: { $isArray: "$tags" }           // Check if field is array
    }
  }
])
