const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  provider: { type: String, default: 'local' }, // to distinguish social logins
  socialId: { type: String }, // store social provider's ID
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
