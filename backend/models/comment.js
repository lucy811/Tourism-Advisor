const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  name: { type: String, required: true },
  creator: { type: String, required: true },
  comment: { type: String, required: true },
  travelInfoId: { type: String, required: true }
});

module.exports = mongoose.model('Comment', commentSchema);