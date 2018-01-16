const express = require( 'express' );
const app = express();
var http = require("http");
const chalk = require('chalk');
const nunjucks = require('nunjucks');
//var router = express.Router();
http.createServer(app).listen(3000);
var locals = {
  title : "A cool Twitter App",
  people:[{name : "Danielle"},
          {name : "Dhara"},
          {name : "Emile"}
        ]
};

nunjucks.configure('views', {
    //autoescape: true,
    //express: app
    noCache : true
});

nunjucks.render('index.html',locals,function(err, output){
  console.log(output)
});

app.use('/', function (req, res, next){
    console.log(chalk.magenta(req.method), chalk.yellow(req.originalUrl), chalk.blue(res.statusCode));
    next();
});
// app.use(function (req, res){
//     // if error throw error;
//     res.sendStatus(200);
// });
app.get('/',function (req, res){
    res.sendStatus(200);

});

//app.use('/', router);
app.listen = function() {
    var server = http.createServer(this);
    return server.listen.apply(server, arg);
}
