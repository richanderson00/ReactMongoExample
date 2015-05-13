var mongo = require('./../mongo/mongo.js');
var express = require('express');
var router = express.Router();
var assert = require('assert');

var ObjectId = require('mongodb').ObjectID;

router.get('/list', function(req, res) {

      mongo.connectDefault( function (err, db) {

        var cursor = db.collection('restaurants').find().toArray(
            function(err, cursor) {
                res.render('list.ejs', { title: 'Express', cursor: cursor   });
                db.close();
            });

    });
});

router.get('/view', function(req, res) {

    mongo.connectDefault( function (err, db) {

        db.collection('restaurants').findOne({"_id" : ObjectId(req.query.id)},
            function (err, item) {
                console.log( req.query.id);
                console.log( item );
                res.render('view.ejs', {title: 'Express', item: item});
                db.close();
            });

    });


});

module.exports  = router;
