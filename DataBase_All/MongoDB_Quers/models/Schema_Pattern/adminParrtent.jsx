✅ Benefits of Using Discriminator 
Pattern👥 Roles / Inheritance – Discriminator Pattern
1️⃣ Base User Schema (Shared Fields)
const mongoose = require('mongoose');

const BaseUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
}, {
  discriminatorKey: 'role', // field to distinguish types
  timestamps: true
});

const User = mongoose.model('User', BaseUserSchema);



2️⃣ Customer Schema (Discriminator)
const Customer = User.discriminator('Customer', new mongoose.Schema({
  loyaltyPoints: { type: Number, default: 0 },
  purchaseHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
}));


Fields specific to Customers only.

Example: loyaltyPoints, purchaseHistory.

3️⃣ Admin Schema (Discriminator)
const Admin = User.discriminator('Admin', new mongoose.Schema({
  accessLevel: { type: Number, default: 1 }, // e.g., 1 = basic, 5 = super admin
  managedSections: [String] // e.g., ['Products', 'Orders', 'Users']
}));