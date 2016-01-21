var users = require("../users.json");

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('login');
    });

    app.get('/list', function (req, res) {
        res.render('list');
    });

    app.get('/shops', function (q, s) {
        s.render('shops');
    });

    //app.post('/login', function (q, s) {
    //    var name = q.body.name;
    //    var user = users[name];
    //    if (user && user.pwd_u == q.body.pwd && "1" == q.body.role) {
    //        console.log("商家登陆");
    //        s.cookie('name_s', name);
    //        s.cookie('role', q.body.role);
    //        s.redirect('/shops');
    //    } else if (user && user.pwd_u == q.body.pwd && "2" == q.body.role) {
    //        console.log("用户登陆");
    //        s.cookie('name_s', name);
    //        s.cookie('role', q.body.role);
    //        s.redirect('/list');
    //    } else {
    //        s.sendStatus(404);
    //    }
    //
    //});

    app.post('/login', function(req,res){
        var name = req.body.name ;
        var user = users[name];
        if(user && user.pwd_s == req.body.pwd && "1" == req.body.role){
            console.log('商家登录~');
            res.cookie('name_s',name);
            res.cookie('role',req.body.role);
            res.redirect('/shops'); //转到商家页面
        }else if(user && user.pwd_u == req.body.pwd && "2" == req.body.role){
            console.log('用户登录~');
            res.cookie('name_u',name);
            res.cookie('role',req.body.role);
            res.redirect('/list'); //转到用户页面
        }
        else{
            res.sendStatus(404);
        }
    });

};