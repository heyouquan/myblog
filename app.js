/**
 * Created by Quangezai on 2018/2/5.
 * 启动入口
 */
var express = require('express');
var mongoose = require('mongoose'); // 加载数据库模块
var bodyParser = require('body-parser'); // 加载body-parser中间件，获取post请求数据
var app = express();

// 静态文件托管
app.use('/public', express.static(__dirname + '/public'));
//使用和配置body-parser
app.use(bodyParser.urlencoded({extended: true}));

// 配置模板引擎
app.set('views', './views');
app.set('view engine', 'ejs');

// 分模块开发
app.use('/admin', require('./routers/admin')); // 后台管理页面
app.use('/api', require('./routers/api')); // api
app.use('/', require('./routers/main')); // 前台页面展示

// 连接数据库
mongoose.connect('mongodb://localhost:27017/blog', function (err) {
    if (err) {
        console.log('数据库连接失败');
    } else {
        console.log('数据库连接成功');
        app.listen(8082, '127.0.0.1');
        console.log('Listening on http://localhost:8082');
    }
});