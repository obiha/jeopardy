const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

const model = require("./public/jeomodule");

// const questions = require('./private/questions.json');

let printRequest = function(request, response, next){
    console.log('/nLOGGED');
    console.log(request.url);
    console.log(request.path);
    next();
}

app.use(express.static('public'));
app.use(express.json());
app.use(printRequest);

app.get('/jeopardy', function(request, response, next){
    response.sendFile(__dirname + '/public/index.html');
});

app.get('/app', function(request, response, next){
    response.sendFile(__dirname + '/public/app.js');
});

app.get('/jeomod', function(request, response, next){
    response.sendFile(__dirname + '/public/jeomodule.js');
});

app.get('/categories', function(request, response, next){
    response.sendFile(__dirname + '/public/categories.json');
});

app.get('/questions', function(request, response, next){
    // response.sendFile(__dirname + '/public/questions.json');
    console.log(model.getCategoryName(0));
});



app.listen(PORT, () => console.log("SERVER LISTENEING ON PORT: " + PORT + '\n' + 'http://localhost:3000'));
