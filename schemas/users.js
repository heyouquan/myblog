/**
 * Created by Quangezai on 2018/2/5.
 * 用户数据结构
 */
var mongoose = require('mongoose');

// 用户的表结构
module.exports = new mongoose.Schema({
    username: String,
    password: String
});



