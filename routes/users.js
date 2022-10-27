var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // const dbo = dbconnect.getDb();

  // console.log(dbo)
  // dbo.collection('airbnb').find({"beds":"1"}).limit(5)
  // .toArray(function (err, result) {
  //   if (err) {
  //     res.status(400).send("Error fetching listings!");
  //  } else {
  //     res.json(result);
  //   }
  // });
  res.send('respond with a resource');
});

const dbo = require('../dbconnect');

// This section will help you get a list of all the records.
router.route('/listings').get(async function (_req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection('airbnb')
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching listings!');
      } else {
        res.json(result);
      }
    });
});



module.exports = router;
