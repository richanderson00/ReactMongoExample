var mongo = require('./../mongo/mongo.js');
var express = require('express');
var router = express.Router();
var assert = require('assert');

router.get('/list', function(req, res) {

      mongo.connectDefault( function (err, db) {

        var cursor = db.collection('restaurants').find().toArray(
            function(err, cursor) {
                res.render('list.ejs', { title: 'Express', cursor: cursor   });
                db.close();
            });

    });
});

module.exports = router;
