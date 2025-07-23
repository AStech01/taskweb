const Task = require('../models/task');



exports.getTasks=async(req,res)=>{
try {
    const tasks=await Task.find().sort({due_date:1})
    res.status(200).json(tasks)
} catch (err) {
    res.status(400).json({message:err.message})
}
};

exports.createTasks=async(req,res)=>{
  const{ title,description,due_date,status} = req.body
  if(!title||!due_date){
    return res,status(400).json({message:'title and due_date are required field'})
  }

  try {
     const newTask=new Task({title,description,due_date,status})
     await newTask.save();
     console.log(newTask,"gg");
     
     res.status(200).json(newTask)
  } catch (err) {
    res.status(400).json({message:err.message})
  }
}

exports.updateTasks=async(req,res)=>{
    try {
         const task = await Task.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
         })
         if(!task)res.status(400).json({message:'Task not found'})
            res.status(200).json(task)
    } catch (err) {
        res.status(400).json({message:err.message})
    }
}


exports.deleteTasks=async(req,res)=>{
    try {
        const task= await Task.findByIdAndDelete(req.params.id);
        if(!task)res.status(400).json({message:"task  not founded"})
            res.status(200).json({message:"task deleted"})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}