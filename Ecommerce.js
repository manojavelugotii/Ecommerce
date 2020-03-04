var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/Ecommerce/";
const express = require('express');
var app = express();
var cors = require('cors')
const port = process.env.PORT || 4000;
app.use(cors())
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());

MongoClient.connect(url, function(err, client) {
  var db = client.db('Ecommerce');
  console.log("Connection established")
  
  app.post('/login', (req, res) => {
    let userName=req.body.userName;
    let password=req.body.password;
        db.collection('users').find({userName: userName}).toArray((err, user) => {
          if(user[0].password != password) {
            return res.status(400).send({
              success: false,
              message: 'Password not matched' 
            })
          } else {
            return res.status(200).send({
              user,
              success: true
            })
          }
       });
  });

  app.get('/getProducts', function(req, res) {
    //Sending Request to Server for getting Products from Products Collection
        db.collection('Products').find({}).toArray(function(err, products) {
    //Sending array of objects
        res.send({products});
    });
  });
  app.post('/addingItemsToCart', (req, res) => {
    console.log('items are coming');
    console.log(req.body);
    let myCartArr = req.body;
    console.log('mycar--------', myCartArr);
        db.collection("CartItems").insert(req.body, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
    });
    
  });
  app.listen(port, () => console.log(`Listening on port 4000`));
});