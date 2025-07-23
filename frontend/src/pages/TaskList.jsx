import React from "react";
import { useEffect, useState } from "react";
import axios from "../axios/api";
import { Link } from "react-router-dom";
import TaskCard from "../components/TaskCard";


export default function TaskList() {
const[tasks, setTasks]=useState([]);


useEffect(()=>{
   axios.get("/tasks").then((res)=>setTasks(res.data))
},[])


  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold ">TASK LIST</h1>
      <Link
  to="/add"
  className="bg-neutral-800 text-white px-5 py-2.5 rounded-xl 
             shadow-md hover:bg-black
             active:scale-95 transition-all duration-200 ease-in-out 
             cursor-pointer font-semibold text-sm"
>
  ➕ Add Task
</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        {tasks.map(task=>(
            <TaskCard key={task._id} task={task}/>
        ))}
      </div>
    </div>
  );
}
