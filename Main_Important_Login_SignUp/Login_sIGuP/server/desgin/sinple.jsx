Client (Browser/Mobile/API)
            │
            v
       ┌────────────┐
       │  app.js    │
       │ Express app │
       └─────┬──────┘
             │
             v
      ┌──────────────┐
      │ routes/      │
      │ router.js     │
      │ Maps API →    │
      │ controller    │
      └──────┬────────┘
             │
             v
     ┌────────────────┐
     │ controllers/   │
     │ post.js        │
     │ Business logic │
     │ (CRUD, cache)  │
     └──────┬─────────┘
            │
   ┌────────┼─────────┐
   │                  │
   v                  v
┌─────────────┐   ┌──────────────┐
│ models/     │   │ Redis (cache)│
│ student.js  │   │ (optional)   │
│ Schema + DB │   │ quick lookup │
└──────┬──────┘   └───────┬──────┘
       │                  │
       v                  │
 ┌───────────────┐        │
 │ db-conn.js    │        │
 │ MongoDB       │        │
 │ Connection    │        │
 └───────┬───────┘        │
         v                 │
 ┌────────────────┐        │
 │ MongoDB Server │ <──────┘
 │ (studentdb)    │
 └────────────────┘

 student-app/
│
├── app.js                # Entry point: initializes server, middleware, routes
├── db-conn.js            # MongoDB connection (Mongoose)
│
├── models/
│   └── student.js        # Student schema/model
│
├── controllers/
│   └── post.js           # Business logic (CRUD, cache ops)
│
├── routes/
│   └── router.js         # Defines endpoints, maps to controllers
│
├── package.json
├── .env                  # Environment variables (Mongo URI, etc.)
└── README.md             # Documentation
