var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var express = require('express');
var app = express();
app.use(express.static(process.cwd() + '/'));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var nytSchema = mongoose.nyt({
    title: String
});

 var Article = mongoose.model('Article', articleSchema);

 var silence = new Article({ title: 'Silence' });
console.log(silence.name);

