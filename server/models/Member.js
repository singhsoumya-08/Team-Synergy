const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name:    { type: String, required: true },
  role:    { type: String, required: true },
  email:   { type: String, required: true },
  contact: { type: String, required: true },
  image:   { type: String }    // filename of uploaded image
}, { timestamps: true });

module.exports = mongoose.model('Member', memberSchema);
