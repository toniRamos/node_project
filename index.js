const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello Word');
});

console.log('Api ready... on 0.0.0.0:80')
app.listen(80, '0.0.0.0')