
var express = require('express');
var bodyParser = require('body-parser');

var port = 3001;
var app = express();

var messages = [];

app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(function(req, res, next){
    console.log('this is middlware')
    next()
})


app.get('/messages', function (req, res, next) {
  res.status(200).json({ messages: messages });
});

app.post('/messages/chat', function(req, res, next) {
  res.send("Got here first")
})
app.post('/messages', function (req, res, next) {
  messages.push({ message: req.body.message, time: new Date() });
  res.status(200).json({ messages: messages });
});




app.listen(port, function(){
    console.log('hw')
});
