
import React, { useContext } from 'react';
import { TodoContext } from '../contexts/todocontext';
import { IoMdAdd } from "react-icons/io";
import {toast } from 'react-toastify';



const AddForm = () => {
  const [tasks, setTasks] = useContext(TodoContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const title = document.querySelector("input").value;
    // Clear input field after adding the task
    document.querySelector("input").value = "";
  
    let check = confirm("Do you want to add this task in your todo")
   
    if(check){
    
      setTasks([...tasks, {title, completed : false}]);
      toast.success("Task Added Successfully.")
      
    }




  };

  return (
    <div className=''>
      <form className='w-full flex justify-center gap-4 py-7' onSubmit={submitHandler}>
        <input required className='rounded-2xl px-3 w-80 py-1 bg-zinc-900' type="text" placeholder='Write your next task here.' />
        <button type='submit' className='w-10 h-10 rounded-full bg-orange-600 text-black font-bold text-xl flex justify-center items-center'>
        <IoMdAdd />
          </button> 
      </form>
    </div>
  );
};

export default AddForm;
