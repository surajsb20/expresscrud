const mongoose=require('mongoose')

const schema=mongoose.Schema({

    name:String,
     email:String
    });
    //schema.path('_id');
    const student=mongoose.model('student',schema)
    
    module.exports=student;