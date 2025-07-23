import React from "react";
import { Link } from "react-router-dom";
import axios from "../axios/api";

export default function TaskCard({ task }) {
  const isOverdue = new Date(task.due_date) < new Date() && task.status !== "completed";

  const handleDelete = async () => {
    if (confirm("Are you sure?")) {
      await axios.delete(`/tasks/${task._id}`);
      window.location.reload();
    }
  };

  return (
    <div
      className={`p-5 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg
      ${isOverdue
        ? "bg-gradient-to-r from-red-100 to-red-50 border border-red-200"
        : "bg-gradient-to-br from-white via-gray-50 to-gray-100"}`}
    >
      <div className="space-y-2 mt-4">

        <div className="flex justify-between items-center bg-white px-4 py-2 rounded-md">
          <span className="text-sm font-semibold text-black">Title : </span>
          <span className="text-sm text-black text-right">{task.title}</span>
        </div>


        <div className="flex justify-between items-center bg-white px-4 py-2 rounded-md">
          <span className="text-sm font-semibold text-black">Description : </span>
          <span className="text-sm text-black text-right">{task.description}</span>
        </div>

   
        <div
          className={`flex justify-between items-center px-4 py-2 rounded-md w-full 
            ${isOverdue ? "bg-white" : "bg-teal-50"}`}
        >
          <span
            className={`text-sm font-semibold w-1/3 ${
              isOverdue ? "text-black" : "text-black"
            }`}
          >
            Due :
          </span>
          <span
            className={`text-sm w-2/3 text-right ${
              isOverdue ? "text-red-600 font-semibold" : "text-gray-900"
            }`}
          >
            {new Date(task.due_date).toLocaleDateString()}
          </span>
        </div>


        {isOverdue && (
          <div className="px-4 py-2 bg-red-200 text-red-800 rounded-md text-sm font-semibold flex items-center gap-2">
             This task is overdue
          </div>
        )}


      <div className="flex justify-between items-center bg-white px-4 py-2 rounded-md w-full">
  <span className="text-sm font-semibold text-black w-1/3">Status :</span>

  <span
    className={`text-sm font-medium w-2/3 text-right px-2 py-1 rounded capitalize
      ${
        task.status === "Completed"
          ? "text-green-600"
          : task.status === "InProgress"
          ? "text-blue-600"
          : "text-red-600"
      }`}
  >
    {task.status}
  </span>
</div>

      </div>


      <p
        className={`text-sm mt-3 ${
          isOverdue ? "text-black font-semibold" : "text-gray-900"
        }`}
      >
        Due: {new Date(task.due_date).toLocaleDateString()}
      </p>


      <div className="mt-4 flex gap-4">
        <Link
          to={`/edit/${task._id}`}
          className="px-4 py-2 rounded-lg bg-neutral-800 text-white text-sm font-medium shadow-md 
               hover:bg-black active:scale-95 transition duration-200 cursor-pointer"
        >
          Edit
        </Link>

        <button
          onClick={handleDelete}
          className="px-4 py-2 rounded-lg bg-neutral-800 text-white text-sm font-medium shadow-md 
               hover:bg-red-700 active:scale-95 transition duration-200 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
