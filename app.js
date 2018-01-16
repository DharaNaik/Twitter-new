const express = require( 'express' );
const app = express();
var http = require("http");
const chalk = require('chalk');
const nunjucks = require('nunjucks');
//var router = express.Router();
http.createServer(app).listen(3000);
var person = [{name : "Danielle"},
          {name : "Dhara"},
          {name : "Emile"}
        ];

app.set('view engine', 'html')
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache : true});
nunjucks.render('index.html',{title : "A cool Twitter App", person : person}
);

app.use('/', function (req, res, next){
    console.log(chalk.magenta(req.method), chalk.yellow(req.originalUrl), chalk.blue(res.statusCode));
    next();
});

app.get('/',function (req, res){
    res.sendStatus(200);
    res.nunjucks.render('index.html',{title : "A cool Twitter App", person : person}
    );
  //  res.render('index', function(err, html) {
  res.send(html);
});

//app.use('/', router);
app.listen = function() {
    var server = http.createServer(this);
    return server.listen.apply(server, arg);
}
