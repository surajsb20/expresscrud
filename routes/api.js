var express = require('express');
var router = express.Router();
const student=require('../model/student')
const apicontroller=require("../controller/apicontroller");
const usercontroller=require("../controller/usercontroller");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/studentlist',apicontroller.studentlist);


router.get('/addstudent',apicontroller.studentadd);
router.get('/',apicontroller.studentlist);
router.post('/studentsave',apicontroller.studentsave);
router.get('/studentedit/:id',apicontroller.studentedit);
router.post('/studentupdate',apicontroller.studentupdate);
router.post('/studentdelete',apicontroller.studentdelete);
router.get('/signup',usercontroller.signinshow);
router.post('/signupto',usercontroller.singin);
const dbo = require('../db/conn');
// This section will help you get a list of all the records.



module.exports = router;