


import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../contexts/todocontext';
import { FaDeleteLeft } from "react-icons/fa6";
import {toast } from 'react-toastify';


const Tasks = () => {
  const [tasks, setTasks] = useContext(TodoContext);
  const [loading, setLoading] = useState(true);



  const deleteHandler = (id) => {
    let value = confirm("Do you want to delete this task ?");
    if(value) {
      const updatedTasks = tasks.filter((task, index) => index !== id);
      setTasks(updatedTasks);
    }

    toast.success("Task Deleted Successfully...")
  
    
  };


  const HandleToggle = (id) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === id) {
        return { ...task, completed: !task.completed }; 
      }
      return task;
    });
    setTasks(updatedTasks);

    toast.success("Task Edited Successfully...")
  };



  useEffect(() => {
    if (tasks.length < 1) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [tasks]);

  return (
    <div className='w-[100vw] h-72 pt-3 overflow-x-hidden overflow-y-auto text-center'>
      {loading ? (
        <h1>No Tasks yet.</h1>
      ) : (
        tasks.map((task, id) => (
          <div className='w-full flex justify-center' key={id}>
            <div className='rounded-3xl flex mb-3 items-center justify-between px-5 w-80 h-12 py-1 bg-zinc-900 border border-orange-500'>
              <div className='flex gap-3 items-center'>
                <div onClick={()=> HandleToggle(id)} id='toggle' className={task.completed ? "bg-green-600 rounded-full w-4 h-4" : "w-4 h-4 rounded-full border-2 cursor-pointer border-orange-500" }></div>
                <p className={task.completed ? "line-through text-white font-medium ": "text-white font-normal"}>{task.title}</p>
              </div>
              <div>
                <p onClick={() => deleteHandler(id)} className='cursor-pointer text-2xl font-light'>
                <FaDeleteLeft />
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Tasks;
