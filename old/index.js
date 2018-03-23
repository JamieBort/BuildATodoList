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
const expressValidator = require('express-validator');
const app = express();


// boilerplate engine
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './view');


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
const todoArray = [];
const doneArray = [];
let lastID = 0;


// responses and requests
// get information
app.get('/', function(request, response) {
  response.render('home', { // populate home.mustache view

// tie these items to the ones in the mustache file
todo:todoArray,
done: doneArray
  });
});


// post todo information
app.post('/', function(request, response) {
  // push to array
lastID += 1

todoArray.push({
  id:lastID,
  text: request.body.item
});

// post done information
app.post("/:id", function (request, response){

  let id = request.params.id;

  holding = todoArray.filter(function(li) {
    return li.id == id;
  });

  holding.forEach(function(li) {
    let index = todoArray.indexOf(li);
    if (index != -1){
      todoArray.splice(index, 1);
    }
    doneArray.push(li);
  });
  response.redirect('/');
});


  // see http://expressjs.com/en/api.html for more info on redirect
  response.redirect('/');
});




// open up the port
app.listen(3000, function() {
  console.log('The app is running');
});
