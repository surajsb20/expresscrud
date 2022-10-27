var express = require('express');
var router = express.Router();
const student=require('../model/student')
const studentcontroller=require("../controller/studentcontroller");
const usercontroller=require("../controller/usercontroller");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/studentlist',studentcontroller.studentlist);


router.get('/addstudent',studentcontroller.studentadd);
router.get('/',studentcontroller.studentlist);
router.post('/studentsave',studentcontroller.studentsave);
router.get('/studentedit/:id',studentcontroller.studentedit);
router.post('/studentupdate',studentcontroller.studentupdate);
router.post('/studentdelete',studentcontroller.studentdelete);
router.get('/signup',usercontroller.signinshow);
router.post('/signupto',usercontroller.singin);
const dbo = require('../db/conn');
// This section will help you get a list of all the records.
router.route('/listings').get(async function (_req, res) {
//   try{
// const data= student.find().limit(2);
// console.log("sss",data)
// res.render('listing',{result:data});
//   }catch(error){
//     console.log(error)
//   }
  // const dbConnect = dbo.getDb();

  // dbConnect
  //   .collection('student')
  //   .find({})
  //   .limit(1)
  //   .toArray(function (err, result) {
  //     if (err) {
  //       res.status(400).send('Error fetching listings!');
        
  //     } else {
  //       console.log(result)
  //       res.render('listing',{result:result});
  //     }
  //   });
});

router.get('/res', function(req,resp,next){
  const dbConnect = dbo.getDb();
  function dbfetch(){
    console.log("agyaaa");
        return new Promise(function(resolve,reject) {
 
        dbConnect
          .collection('student')
          .findOne({"beds":"1"})
          .limit(1)
          .toArray(function (err, result) {
            
            if (err) {
             
              resp.status(400).send('Error fetching listings!');
             reject(err)
            } else {
              
              resolve(result)
             
            }
          });

    
        })
       
  }

//  resp.render('demo',{title:'Hello WOrld',name:'Hello world'});
})
module.exports = router;