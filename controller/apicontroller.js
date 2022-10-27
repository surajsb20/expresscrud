const student=require('../model/student');

const studentlist= async function(req,resp,next){
  //  studentlistdata =student.find();
   
   // console.log(studentlistdata)
   try {
    studentlistdata =await  student.find({});
  //resp.send(studentlistdata);
      resp.json({data:studentlistdata,status:1,msg:''});
  } catch (error) {
    console.log(error)
    resp.status(500).send(error);
  }
//resp.send("ss");
}

const studentadd=function(req,resp,next){
    resp.render("addform");
  
}
const savestudent=async function(req,res,next){
    try{
   let name=req.body.name;
   let email=req.body.email; 
   const studentdata=new student({name:name,email:email});
   await studentdata.save();
   res.redirect('/studentlist');
    }catch(err){
        console.log(error)
        res.status(500).send(error);
    }
}

const studentedit=async function(req,resp,next){
    try{
       
    const id=req.params.id;
  const studentData=await student.findOne({_id:id})
    resp.json({data:studentData,status:1,msg:''});
    }catch(err){
        console.log(err)
        resp.status(500).send(err)
    }
}
const studentupdate=async function(req,res,next){
    try{
        console.log("params",await req.body)
   let id= await req.body._id;     
   let name=req.body.name;
   let email=req.body.email; 
//    const ustudent=await student.findOneAndUpdate({_id:id}, req.body, function (err, place) {
// console.log('errr',place)
//    })

const ustudent=await student.findByIdAndUpdate({_id:id},{$set:{name:name,email:email},upsert:true});
res.json({data:null,status:1,msg:''})

   //await ustudent.updateOne({name:name,email:email})
 
    }catch(err){
        console.log(err)
        res.status(500).send(err);
    }
}
const studentdelete=async function(req,resp,next){
    let id=  req.body._id;
    student.remove({ _id: id }, function(err) {
        if (!err) {
            resp.json({data:1,status:1,msg:'deleted'});
         }
        else {
            resp.status(500).send(err);
            }});
}

module.exports={studentlist:studentlist,studentadd:studentadd,studentsave:savestudent,studentedit:studentedit,studentdelete:studentdelete,studentupdate:studentupdate}