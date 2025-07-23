const mongoose=require("mongoose")


const taskSchema=new mongoose.Schema({
   title:{type:String,required:true},
   description:{type:String,required:true},
   due_date:{type:Date, required:true },
   status:{
    type:String,
    enum:['pending','InProgress','Completed'],
    default:'pending'
   }

},{timesStamps:true})

module.exports=mongoose.model('task',taskSchema)