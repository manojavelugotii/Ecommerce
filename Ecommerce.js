var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/Ecommerce/";
const express = require('express');
var app = express();
var cors = require('cors')
const port = process.env.PORT || 4000;
app.use(cors())

MongoClient.connect(url, function(err, client) {
  var db = client.db('Ecommerce');
  console.log("Connection established")

  app.get('/getProducts', function(req, res) {
    //Sending Request to Server for getting Products from Products Collection
        db.collection('Products').find({}).toArray(function(err, products) {
    //Sending array of objects
        res.send({products});
    });
  });
  app.listen(port, () => console.log(`Listening on port 4000`));
});