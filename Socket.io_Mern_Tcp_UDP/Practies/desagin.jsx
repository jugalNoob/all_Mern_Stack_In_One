   ┌───────────────┐             ┌───────────────┐             ┌───────────────┐
   │   Client 1    │             │     Server    │             │   Client 2    │
   │  (Browser)    │             │  (Socket.IO)  │             │  (Browser)    │
   └───────┬───────┘             └───────┬───────┘             └───────┬───────┘
           │                             │                             │
           │  1️⃣ Connect (Handshake)    │                             │
           │────────────────────────────>│                             │
           │                             │                             │
           │                             │  2️⃣ Connection Established │
           │                             │<───────────────────────────│
           │                             │                             │
           │  3️⃣ Emit Event (message)  │                             │
           │────────────────────────────>│                             │
           │                             │                             │
           │                             │  4️⃣ Broadcast Event        │
           │                             │────────────────────────────>│
           │                             │                             │
           │                             │  5️⃣ Other Clients Receive  │
           │                             │                             │
           ▼                             ▼                             ▼
   Display message instantly         Processes event               Display message instantly




   

Client 1 (Alice)      Server (Socket.IO)       Client 2 (Bob)
┌───────────────┐      ┌───────────────┐      ┌───────────────┐
│ Sends message │ ---> │ Receives event│ ---> │ Receives msg  │
│ ("Hello Bob") │      │ Broadcasts    │      │ Displays msg  │
└───────────────┘      └───────────────┘      └───────────────┘





📌 REST vs Socket.IO Comparison Diagram




        REST API                              Socket.IO
 ┌───────────────────┐                  ┌───────────────────┐
 │  Client           │                  │  Client           │
 │  (Browser/App)    │                  │  (Browser/App)    │
 └─────────┬─────────┘                  └─────────┬─────────┘
           │                                      │
  1️⃣ Send request (HTTP GET/POST)       1️⃣ Connect (WebSocket / Handshake)
           │                                      │
           ▼                                      ▼
 ┌───────────────────┐                  ┌───────────────────┐
 │  Server           │                  │  Server           │
 │  (REST API)       │                  │  (Socket.IO)      │
 └─────────┬─────────┘                  └─────────┬─────────┘
           │                                      │
  2️⃣ Respond with data                     2️⃣ Event received
           │                                      │
           ▼                                      │
  Client must poll to get                 3️⃣ Server broadcasts event
  new updates (no real-time)             │
                                         ▼
                                     4️⃣ Clients receive updates instantly
