const express = require( 'express' );
const app = express();
var http = require("http");
const chalk = require('chalk');
const nunjucks = require('nunjucks');
const routes = require('./routes');
app.use('/', routes);
app.use(express.static('public'))

//var router = express.Router();
app.listen(3000);
var person = [{name : "Danielle"},
          {name : "Dhara"},
          {name : "Emile"}
        ];

app.set('view engine', 'html')
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache : true});

// app.use('/', function (req, res, next){
//     console.log(chalk.magenta(req.method), chalk.yellow(req.originalUrl), chalk.blue(res.statusCode));
//     next();
// });

// app.get('/',function (req, res){
//   res.render( 'index', {title: 'Hall of Fame', people: person} );
// });


// app.listen = function() {
//     var server = http.createServer(this);
//     return server.listen.apply(server, arg);
// }
