const express = require( 'express' );
const app = express();
var http = require("http");
//var router = express.Router();
http.createServer(app).listen(3000);
app.use('/', function (req, res, next){
    console.log(req.method, req.originalUrl, res.statusCode);
    next();
});
// app.use(function (req, res){
//     // if error throw error;
//     res.sendStatus(200);
// });
app.get('/',function (req, res){
    res.sendStatus(200);
    //res.render("testing");
   // res.send("this work?");
});
//app.use('/', router);
app.listen = function() {
    var server = http.createServer(this);
    return server.listen.apply(server, arg);
}
