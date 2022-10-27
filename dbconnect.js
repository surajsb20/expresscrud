const { MongoClient } = require('mongodb');
const connectionString = "mongodb://127.0.0.1:27017/airbnb?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0";
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db('airbnb');
      console.log('Successfully connected to MongoDB.');

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};
