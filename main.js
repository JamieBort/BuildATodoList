// 1. require packages
// 2. use the boiler plate engine for mustacheExpress
// 3. use exrpress.static
// 4. define variables
// 5. write get
// 6. write post
// 7. write post
// 8. use app.listen(3000....)
// 9. create home.mustache file

// require various packages
const express = require('express'); // npm install express --save
const app = express();
const mustacheExpress = require('mustache-express'); // npm install mustache-express --save
const bodyParser = require('body-parser') // npm install body-parser --save
// About body-parser from: https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express
// To handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser.
// body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.
// The middleware was a part of Express.js earlier but now you have to install it separately.
// This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request. Install body-parser using NPM as shown below.
// npm install body-parser --save




const expressValidator = require('express-validator'); // npm install express-validator --save

// boilerplate engine
// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

// use express static
app.use(express.static('public')); // from: https://expressjs.com/en/starter/static-files.html

// use body parser
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded

// use validator
app.use(expressValidator()); // this line must be immediately after any of the bodyParser middlewares


// define variables ==========================
// define two arrays and one integer variable
const mytodoarray = [];
const mydonearray = [];
let myintegervariable = 0;

// responses and requests
// get information
// app.get('/', function (req, res) {
// res.render('home', { // populate home.mustache view

app.get('/', function (req, res) {
  res.render('home', { title: 'Hey', message: 'Hello there!' })
});

// tie these items to the ones in the mustache file


// post todo information
app.post('/', function (req, res) {
  res.send('POST request to homepage');
});

// post done information
app.post('/', function (req, res) {
  res.post('Post again');
})


// see http://expressjs.com/en/api.html for more info on redirect




// open up the port
app.listen(3000, () => console.log('Example app listening on port 3000!'))