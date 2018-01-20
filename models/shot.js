const mongoose = require('mongoose');

const ShotSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  tags: Array,
  animated: Boolean,
  ab_compatible: Boolean,
  variantId: String,
  votes: Number,
});

module.exports = mongoose.model('Shot', ShotSchema);