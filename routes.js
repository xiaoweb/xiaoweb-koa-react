/** * Created with WebStorm. * User: RD-小小WEB * Date: 2015/12/26 * Time: 0:30 */
var index = require('./routes/index'),
    user = require('./routes/user/user'),
    login = require('./routes/user/login'),
    logout = require('./routes/user/logout'),
    video = require('./routes/video');

var admin = require('./routes/admin/admin'),
    adminIndex = require('./routes/admin/index'),
    adminTest = require('./routes/admin/test');

function routes(router) {
    //首页
    router.get("/", index);

    //用户
    router.get("/user", user);

    //登录页
    router.get('/login', login);
    router.post('/login', login);

    //注销登录
    router.get('/logout',logout)

    //后台管理
    router.get(/\/admin\//,admin);       //判断是否登录
    router.get('/admin',adminIndex);    //首页
    router.get('/admin/*',adminIndex);

    //视频更改页
    router.get('/video', video);
    router.post('/video', video);
}


module.exports = routes;

