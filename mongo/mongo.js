/**
 * Created by andersor on 5/10/15.
 */

exports.mongoUri = 'mongodb://localhost:27017/test';

mongoClient = require('mongodb').MongoClient;

exports.hello = function()
{
    console.log("cool");
}

exports.connect  = mongoClient.connect;

exports.connectDefault = function( callback ) {

    exports.connect(exports.mongoUri, callback );

}