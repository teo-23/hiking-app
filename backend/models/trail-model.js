const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user-model');
 
const trailSchema = new Schema({
  title: String,
  description: String,
  tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
  owner: {type: Schema.Types.ObjectId, ref: 'User'}
});

const Trail = mongoose.model('Trail', trailSchema);

module.exports = Trail;
