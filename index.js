// 1. require packages DONE
// 2. use the boiler plate engine for mustacheExpress DONE
// 3. use exrpress.static DONE
// 4. define variables
// 5. write get
// 6. write post
// 7. write post
// 8. use app.listen(3000....) DONE

// also create home.mustache file

// require various packages
const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = requre('exress-validator');
const app = express();


// boilerplate engine
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', '/views');


// use express static
app.use(express.static('public'));


// use body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));

// use validator
app.use(expressValidator()); // this line must be immediately after any of the bodyParser middlewares


// define variables ==========================


// responses and requests
// get information
app.get('/', function(response, request) {
  res.render('home', {
// tie these items to the ones in the mustache file
  });
});


// post information
app.post('/', function(response, request) {
  // popoulate variable
  // push to array

  // see http://expressjs.com/en/api.html for more info on redirect
  res.redirect('/');
});


// open up the port
app.listen(3000, function() {
  console.log('The app is running');
});
