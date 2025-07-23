import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../axios/api";

export default function TaskForm() {
 const[task, setTask]=useState({title :"", description:"", due_date:"", status:"pending"})
 const[error, setError]=useState("");
 const navigate=useNavigate()
 const{id}=useParams()

 useEffect(()=>{
   if(id){
    axios.get(`/tasks/${id}`).then(() => setTask(res.data))
   }
 },[id])

 const handleChange =(e)=>{
   setTask({...task, [e.target.name]:e.target.value})
 }

 const handleSubmit=async(e)=>{
    e.preventDefault()
    if(!task.title || !task.due_date )return setError("title and due_date are required")
        try {
            id
            ? await axios.put(`/tasks/${id}`,task)
            : await axios.post("/tasks",task)
            navigate("/")

        } catch (error) {
            setError("something went wrong")
        }
 }

  return (
<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl space-y-5"
  >
    <h2 className="text-2xl font-bold text-center text-gray-800 uppercase">
      {id ? "Update Task" : "Add New Task"}
    </h2>

    {error && (
      <p className="text-red-600 text-sm text-center font-medium">{error}</p>
    )}


    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
      <input
        name="title"
        placeholder="Enter title"
        className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={task.title}
        onChange={handleChange}
      />
    </div>


    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
      <textarea
        name="description"
        placeholder="Enter description"
        className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={task.description}
        onChange={handleChange}
      />
    </div>

   
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
      <input
        type="date"
        name="due_date"
        className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={task.due_date}
        onChange={handleChange}
      />
    </div>

  
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
      <select
        name="status"
        className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={task.status}
        onChange={handleChange}
      >
        <option value="pending">Pending</option>
        <option value="InProgress">in Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>

  
    <button
      type="submit"
      className="w-full bg-neutral-800 text-white  font-semibold py-2.5 rounded-lg shadow-md
                hover:bg-black transition-all duration-200 active:scale-95 cursor-pointer"
    >
      {id ? "Update Task" : "Add Task"}
    </button>
  </form>
</div>

  );
}
