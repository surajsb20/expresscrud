const user = require("../model/user")
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

const signinshow= function(req,resp){
    resp.render('signup')
}


const signin=async function (req,resp){
   

    try{
        const password=await bcrypt.hash(req.body.password,10)
  
        console.log(resp.body)
const cuser= await new user({
    fullName:req.body.name,
    email:req.body.email,
    role:req.body.role,
    password:password,
    role:'admin',
});

cuser.save((err,suser)=>{
    if(!err){
        console.log(suser)
        resp.redirect('/');
    }else{
        console.log('error',err)
    }
})

    }catch(err){
        console.log('error',err)
    }

}
const login=function(req,resp){

}
module.exports={signinshow:signinshow,singin:signin,login:login}