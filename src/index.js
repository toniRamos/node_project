const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('./infrastructure/mongo');
const app = express();
const Customer = require('./Domain/Customer')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/', function (req, res) {
    res.send('Hello Word');
});

app.get('/test-connection', function (req, res) {
    mongo()
});

app.post('/customer', function (req, res) {
    //Example body
    /**
    {
        "name": "Name",
        "age": 30
    }
    */
    customer = new Customer();
    customer.fill(req.body);
    if(customer.validate()) {    
        mongo.save(customer.toData());
        res.send('Saved!');
    } else {
        res.send('Error to save model Customer');
    }
});

console.log('Api ready... on 0.0.0.0:80')
app.listen(80, '0.0.0.0')