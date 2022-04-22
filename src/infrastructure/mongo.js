var MongoClient = require('mongodb').MongoClient;

uri = "mongodb://mongo:27017/";

client = new MongoClient(uri);

module.exports = {

async save(data) {
    try {
        await client.connect();
        const database = client.db("mydb");
        const haiku = database.collection("customers");
        const result = await haiku.insertOne(data);
    } finally {
        await  client.close();
    }
  }
}
