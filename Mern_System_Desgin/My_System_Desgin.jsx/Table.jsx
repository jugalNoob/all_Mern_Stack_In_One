| **Topic**                              | **Definition**                                                                             | **Key Use Case / Example**                  |
| -------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------- |
| **Load Balancing**                     | Distributes traffic across servers to avoid overload                                       | Amazon, YouTube                             |
| **Caching**                            | Stores frequently accessed data for fast retrieval                                         | Redis for user sessions                     |
| **Database Sharding**                  | Splits large DB into smaller, manageable shards                                            | Social media feeds scaling                  |
| **Replication**                        | Copies data across servers for reliability                                                 | MySQL Master-Slave replication              |
| **CAP Theorem**                        | Distributed systems can choose only 2 of 3: Consistency, Availability, Partition Tolerance | Cassandra, DynamoDB trade-offs              |
| **Message Queues**                     | Enables asynchronous communication between services                                        | Kafka, RabbitMQ for order processing        |
| **Rate Limiting**                      | Restricts requests per client/time unit                                                    | API abuse prevention (Twitter API)          |
| **API Gateway**                        | Entry point for microservices; handles routing, auth, throttling                           | AWS API Gateway, Kong                       |
| **Microservices**                      | Modular, independent services                                                              | E-commerce: payment, inventory              |
| **Service Discovery**                  | Automatically finds microservices in a network                                             | Kubernetes, Consul                          |
| **Database Indexing**                  | Speeds up queries                                                                          | MySQL/MongoDB search optimization           |
| **CDN**                                | Globally distributed servers for faster content delivery                                   | Cloudflare, Akamai for video streaming      |
| **Partitioning**                       | Divides tables/data for faster access                                                      | Time-based logs, large datasets             |
| **Eventual Consistency**               | Data may temporarily differ but converges eventually                                       | DNS, NoSQL DBs                              |
| **WebSockets**                         | Full-duplex communication between client & server                                          | Chat apps, live notifications               |
| **Fault Tolerance**                    | System continues operating despite failures                                                | Auto-retry, redundant servers               |
| **Monitoring**                         | Tracks system health and performance                                                       | Prometheus, Grafana, ELK Stack              |
| **AuthN & AuthZ**                      | AuthN: Verify identity; AuthZ: Control access                                              | OAuth login, role-based access              |
| **Consistent Hashing**                 | Evenly distributes data; minimizes remapping on scaling                                    | Redis Cluster, caching                      |
| **Scalability**                        | Ability to handle traffic/data growth                                                      | Horizontal & vertical scaling               |
| **URL Shortener**                      | Converts long URLs to short links                                                          | Bit.ly, TinyURL                             |
| **Patterns & Types**                   | Common architecture/design patterns                                                        | MVC, Event-driven, CQRS                     |
| **API Types**                          | REST, GraphQL, gRPC, Webhooks                                                              | Flexible client-server communication        |
| **Data Modeling & Schema Design**      | Efficient relational/NoSQL schema design                                                   | Optimized queries, scalability              |
| **Transaction Management (ACID/BASE)** | ACID: SQL consistency; BASE: NoSQL eventual consistency                                    | Choosing DB type                            |
| **Queue vs Stream Processing**         | Queues: order processing; Streams: real-time events                                        | RabbitMQ vs Kafka                           |
| **Backpressure Handling**              | Controls load when consumers lag behind producers                                          | Kafka, reactive systems                     |
| **Database Transactions & Locks**      | Optimistic vs pessimistic locking                                                          | Avoid race conditions, maintain consistency |
| **Elasticity & Auto-Scaling**          | Dynamic scaling based on traffic                                                           | AWS Auto Scaling, Kubernetes HPA            |
| **Distributed System Challenges**      | Latency, partial failures, clock sync, consensus                                           | Raft/Paxos, multi-region apps               |
| **Observability**                      | Logs, metrics, traces for debugging                                                        | Jaeger, OpenTelemetry                       |
| **Security & Encryption**              | TLS, HTTPS, JWT, OAuth, data encryption                                                    | Protect user data & API                     |
| **Testing & CI/CD**                    | Deploy changes safely                                                                      | Blue-green deployment, canary release       |
| **Data Replication Strategies**        | Synchronous vs asynchronous replication                                                    | Multi-region DB replication                 |
| **Throttling & Backoff Strategies**    | Exponential backoff, circuit breakers                                                      | Prevent system overload                     |
