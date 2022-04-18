//import { MongoClient } from "mongodb";
var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://mongo:27017/";


// Replace the uri string with your MongoDB deployment's connection string.

/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});
*/

uri = "mongodb://mongo:27017/";

client = new MongoClient(uri);

module.exports = {

/*
exports.save = () => {
    var dbo = db.db("mydb");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });

    //return allColors[Math.floor(Math.random() * allColors.length)];
}
*/

async save() {
    try {
        await client.connect();

      const database = client.db("mydb");
      const haiku = database.collection("customers");
      // create a document to insert
      const doc = {
        title: "Record of a Shriveled Datum",
        content: "No bytes, no problem. Just insert a document, in MongoDB",
      }
      const result = await haiku.insertOne(doc);
      console.log(result);
    } finally {
        await  client.close();
    }
  }
}
