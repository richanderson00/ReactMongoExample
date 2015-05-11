var express = require('express');
var app = express();

var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
var path = require('path');

var mongo = require('./mongo/mongo.js');

mongo.hello();


var routes = require('./routes/index');

var findRestaurants = function(res, db, callback) {

    console.log('Connected');

    var cursor = db.collection('restaurants').find();

    cursor.forEach( function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.log(doc.name);
        }
        else
        {
            callback();
        }
    });
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', routes);


var server = app.listen(3001, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
