/**
 * Users Model
 */
const mongoose = require('mongoose');
const userSchema = require('../database/schema').users;
const User = mongoose.model('User', userSchema);

module.exports = User;