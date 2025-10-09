1️⃣ MongoDB Replication Concept

Replication in MongoDB is achieved through Replica Sets, 
which are groups of MongoDB servers that maintain the same data.

Core concepts:



| Concept                | Explanation                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| **Primary**            | Handles all writes by default. One primary per replica set.                                    |
| **Secondary**          | Copies data from primary using the **oplog**. Can optionally serve reads.                      |
| **Oplog**              | Operation log in primary that secondaries replay to stay in sync.                              |
| **Arbiter**            | Optional member. Participates in elections but does **not store data**.                        |
| **Automatic Failover** | If primary fails, secondaries vote to elect a new primary automatically.                       |
| **Read Preference**    | Determines whether reads go to primary or secondary (e.g., `primary`, `secondary`, `nearest`). |



2️⃣ Types of Replication in MongoDB

In MongoDB, replication is mainly through replica sets, but 
there are different ways you can configure replication:

| Type/Configuration                     | Concept & Usage                                                                                                                                                     |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Single Replica Set**                 | A normal replica set with 1 primary + 1 or more secondaries. Provides redundancy and automatic failover.                                                            |
| **Arbiter-Based Replica Set**          | Includes an arbiter node to maintain odd number of voting members. Arbiter does not store data but helps in elections.                                              |
| **Delayed Secondary**                  | Secondary node that replicates data with a **delay** (e.g., 24 hours). Useful for disaster recovery or accidental deletion protection.                              |
| **Priority Configuration**             | Replica set members can have different **election priorities**. Higher priority = more likely to become primary. Useful for controlling which node becomes primary. |
| **Hidden Secondary**                   | Secondary that does not serve reads and is hidden from client applications. Useful for dedicated backup or reporting.                                               |
| **Tag-Aware / Geographic Replication** | Replica set members can have **tags**, allowing read preferences to route reads to specific nodes (like different regions). Useful for distributed apps.            |




3️⃣ How Replication Works (Conceptual Flow)

Primary writes data → records operations in oplog.

Secondaries pull oplog → replay operations to stay in sync.

Automatic failover → if primary fails, election among secondaries chooses a new primary.

Read preference → client can read from primary or secondary based on configuration.

💡 Key Points for Interviews

Replication ≠ Sharding, but can be combined.

At least 3 nodes are recommended for a robust replica set
 (Primary + 2 Secondaries or 1 Arbiter).

Use delayed, hidden, or tag-aware secondaries for special use cases
 like backups, analytics, or geographically distributed reads.


