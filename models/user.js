/**
 * Created by Quangezai on 2018/2/5.
 * 创建数据模型
 */
var mongoose = require('mongoose');
var usersSchema = require('../schemas/users');

module.exports = mongoose.model('User', usersSchema); // 定义数据模型User

