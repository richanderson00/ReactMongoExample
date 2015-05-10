var express = require('express');
var app = express();

var MongoClient =  require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';


var findRestaurants = function(res, db, callback) {


    console.log('Connected');

    var cursor = db.collection('restaurants').find();

    cursor.each( function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.log(doc);
        }
        else
        {
            callback();
        }
    });
}

app.get('/', function (req, res) {

    res.send("Hello");

     MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        findRestaurants(res, db, function() {
            db.close();
        });
     });
});


var server = app.listen(3001, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
