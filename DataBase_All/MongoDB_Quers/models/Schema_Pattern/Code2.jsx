🛠 Step-by-Step Advanced Schema Implementation
1️⃣ Base / Parent Schemas
User (Parent Schema with Discriminator)
const mongoose = require('mongoose');

const BaseUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
}, {
  discriminatorKey: 'role', // Admin / Customer
  timestamps: true
});

const User = mongoose.model('User', BaseUserSchema);
module.exports = User;

2️⃣ Discriminator Schemas (Roles)
Customer
const Customer = User.discriminator('Customer', new mongoose.Schema({
  loyaltyPoints: { type: Number, default: 0 },
  purchaseHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
}));

Admin
const Admin = User.discriminator('Admin', new mongoose.Schema({
  accessLevel: { type: Number, default: 1 },
  managedSections: [String]
}));

module.exports = { Customer, Admin };


✅ Why Discriminator: Multiple roles share fields but also have custom fields.

3️⃣ Outlier Pattern (Profile / Large Fields)
const ProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  address: String,
  phone: String,
  avatar: String
});

const Profile = mongoose.model('Profile', ProfileSchema);
module.exports = Profile;


✅ Why Outlier: Keeps main user document small; volatile info separated.

4️⃣ Product Schema (Embedded Pattern)
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  specs: {
    weight: Number,
    color: String,
    dimensions: String
  },
  tags: [String],
  images: [String]
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;


✅ Why Embedded: Specs, tags, and images are tightly related; fast reads.

5️⃣ Order Schema (Referenced Pattern)
const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number,
      price: Number
    }
  ],
  total: Number,
  status: { type: String, default: 'Pending' }
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;


✅ Why Referenced: Avoids duplication; Products can be shared among orders.

6️⃣ Review Schema (Polymorphic Pattern)
const ReviewSchema = new mongoose.Schema({
  rating: Number,
  comment: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reviewableId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'reviewableType'
  },
  reviewableType: {
    type: String,
    required: true,
    enum: ['Product', 'Order']
  }
});

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;


✅ Why Polymorphic: A review can belong to either Product or Order.

7️⃣ Log Schema (Bucket / Time-Series Pattern)
const LogBucketSchema = new mongoose.Schema({
  service: String,
  date: Date,
  logs: [
    {
      timestamp: Date,
      level: { type: String, enum: ['info', 'warn', 'error'] },
      message: String
    }
  ]
});

const LogBucket = mongoose.model('LogBucket', LogBucketSchema);
module.exports = LogBucket;


✅ Why Bucket: Groups logs by date, reduces collection size, improves query efficiency.

8️⃣ How Everything Connects
User (Parent Collection)
├─ Customer (Discriminator)
│  └─ purchaseHistory → Order (Referenced)
├─ Admin (Discriminator)
│  └─ managedSections
└─ Profile (Outlier) → linked by userId

Product (Embedded)
├─ specs, images, tags

Order (Referenced)
├─ userId → User
├─ items.productId → Product

Review (Polymorphic)
├─ reviewableId → Product or Order

Logs (Bucket)
├─ service, date, logs[]

✅ Summary of Patterns in Project