const express = require('express')
const mongo = require('./infrastructure/mongo')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello Word');
});

app.get('/test-connection', function (req, res) {
    mongo()
});

app.post('/customer', function (req, res) {
    //TODO:: Create a model customer and send to function save
    mongo.save()
    res.send('Saved!');
});

console.log('Api ready... on 0.0.0.0:80')
app.listen(80, '0.0.0.0')