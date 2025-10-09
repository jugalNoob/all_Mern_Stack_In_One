System Design Interview Questions – Complete List
1. Load Balancing

Explain how load balancers work in horizontal scaling.

Compare Round Robin, Least Connections, and IP Hash load balancing. When would you use each?

How would you implement sticky sessions for a shopping cart application?

What is the difference between hardware and software load balancers?

How do you handle failover if one server behind a load balancer goes down?

2. Caching

What is caching and why is it important?

Explain the difference between in-memory caching (Redis) and CDN caching.

How do you handle cache invalidation?

Compare write-through, write-around, and write-back caching strategies.

How would you implement caching in a URL shortener service?

3. Database Sharding

What is sharding and why is it used?

How would you shard a user database for a social media app?

Explain the difference between horizontal and vertical sharding.

How do you handle cross-shard queries?

How does sharding affect transactions and consistency?

4. Replication

What is database replication and why is it needed?

Compare synchronous vs asynchronous replication.

How would you replicate a MySQL database across multiple regions?

How do replication lag and failover affect consistency?

5. CAP Theorem

Explain CAP theorem with an example.

Which two properties would you choose for a social media feed? Why?

How does eventual consistency relate to CAP theorem?

Give a real-world example of an AP system.

6. Message Queues

What is a message queue and why is it used?

Compare Kafka and RabbitMQ. When would you use each?

How do you ensure message ordering in a distributed queue?

Explain consumer groups in Kafka.

How do you handle message retries and failures?

7. Rate Limiting

What is rate limiting and why is it important?

Explain token bucket vs leaky bucket algorithms.

How would you implement rate limiting for a public API?

What happens if you exceed the rate limit in a distributed system?

8. API Gateway

What is an API Gateway and why is it used in microservices?

How does API Gateway handle authentication, throttling, and monitoring?

How is it different from a load balancer?

Can you combine API Gateway with caching? How?

9. Microservices

What are microservices and why are they preferred over monolithic architecture?

How do you manage communication between microservices?

How do you handle service failures in a microservice architecture?

Explain database per microservice vs shared database pattern.

How do you scale a microservice horizontally?

10. Service Discovery

What is service discovery and why is it important in microservices?

Compare client-side vs server-side service discovery.

How would you implement service discovery with Kubernetes?

11. Database Indexing

What is an index and how does it improve query performance?

Explain B-Tree vs Hash indexes.

What are the trade-offs of adding too many indexes?

How do you index a composite key in MongoDB?

12. CDN

What is a CDN and how does it improve performance?

How does CDN caching differ from database caching?

What is edge caching and how does it work?

How do you handle cache invalidation in a CDN?

13. Partitioning

What is data partitioning and how is it different from sharding?

Explain range, hash, and list partitioning with examples.

How does partitioning improve query performance?

14. Eventual Consistency

Explain eventual consistency with a real-world example.

How does eventual consistency affect user experience?

Compare strong consistency vs eventual consistency in distributed systems.

15. WebSockets

What is WebSocket and how is it different from HTTP?

How would you implement a real-time chat app using WebSockets?

How do you handle scaling WebSocket servers?

16. Fault Tolerance

What is fault tolerance in distributed systems?

How do you design a fault-tolerant database system?

Explain the difference between failover and redundancy.

17. Monitoring

Why is monitoring important in system design?

What are metrics, logs, and traces?

Name some popular monitoring tools and their use cases.

How do you set alerts for high traffic or failures?

18. AuthN & AuthZ

Difference between authentication and authorization.

How do JWTs work for authentication?

How would you implement role-based access control (RBAC)?

Compare cookies vs sessions for web authentication.

19. Consistent Hashing

What is consistent hashing and why is it used?

How does it help in distributed caching (like Redis Cluster)?

Explain hash ring and virtual nodes.

20. Scalability

Difference between vertical and horizontal scaling.

How would you scale a URL shortener to handle millions of requests?

Explain trade-offs between scaling up and scaling out.

21. URL Shortener

How would you design a URL shortener system?

How do you handle collisions in short codes?

How do you ensure scalability and low latency?

22. Patterns & Types

Name common software architecture patterns.

When would you use event-driven vs request-response patterns?

Explain CQRS and its use cases.

23. API Types

Compare REST, GraphQL, gRPC, and Webhooks.

When would you use GraphQL instead of REST?

How do you handle versioning in APIs?

24. Data Modeling & Schema Design

How do you design a relational schema for a social media app?

How do you choose between SQL vs NoSQL?

Explain normalization vs denormalization.

25. Transaction Management & ACID/BASE

Explain ACID vs BASE.

How do you handle transactions across distributed databases?

Give an example of eventual consistency in NoSQL.

26. Queue vs Stream Processing

Difference between queue-based and stream-based processing.

When would you use Kafka over RabbitMQ?

How do you guarantee message ordering in streams?

27. Backpressure Handling

What is backpressure in distributed systems?

How do you handle backpressure in a streaming system?

28. Elasticity & Auto-Scaling

What is elasticity in cloud systems?

How would you auto-scale a web service based on CPU load?

Difference between vertical and horizontal auto-scaling.

29. Distributed System Challenges

Explain network latency and partial failures.

How do you handle consensus in distributed systems? (Raft / Paxos)

What are split-brain scenarios and how do you prevent them?

30. Observability

Difference between logging, metrics, and tracing.

How would you monitor a microservices architecture?

Name tools for observability and their use cases.

31. Security & Encryption

How do you secure data in transit and at rest?

Difference between symmetric and asymmetric encryption.

How do you prevent common web attacks (XSS, CSRF, SQLi)?

32. Testing & CI/CD

How do you deploy changes safely in production?

Explain blue-green and canary deployments.

How would you test a distributed system for scalability?

33. Data Replication Strategies

Difference between synchronous and asynchronous replication.

How do you replicate databases across regions?

What are the trade-offs between latency and consistency?

34. Throttling & Backoff Strategies

What is exponential backoff and why is it used?

How do you implement circuit breakers in APIs?

Difference between throttling and rate limiting.

✅ Tip for Interviews:

Always explain trade-offs and draw diagrams.

Give real-world examples (YouTube, Netflix, Amazon).

Mention stateless vs stateful services when relevant.