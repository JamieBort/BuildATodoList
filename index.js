// assign packages to variables
const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();
const todo = require('./todo');
// probably not needed
const fs = require( 'fs' );

// tell express to use mustache
app.engine('mustahe', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// configure the / path
app.get('/form', function(request, response) {
  response.send("Hello, good looking");
});

// create
app.get('/', function(request, response) {
  response.render('todo', {
    todo: todo
  })
});

// take this for granted
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// create .....
app.post('/addTodo', function(request, response) {
  let todoItem = req.body;
  todo.push(todoItem);
  response.send('You added a ToDo Item');
})


// make express listen on port 3000
app.listen(3000, function() {
  console.log("The app is running");
});
