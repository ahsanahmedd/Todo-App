import React, { useContext } from 'react'

import { TodoContext } from '../contexts/todocontext';

const counter = () => {


 const [tasks, settasks] =  useContext(TodoContext);

 const completedTasks = tasks.filter(task => task.completed === true);
 
 const totaltasks = tasks.length;


  return (
    <div className='pt-8 w-full flex justify-center'>
        <div className='w-96 px-12 py-2 flex items-center justify-between h-60 rounded-2xl border border-cyan-50'>
          
            <div>
              <h1 className='font-bold uppercase'>Todo Done.</h1>
              <p className='text-sm tracking-tighter'>keep tracking.</p>
            </div>

            <div className='w-36 h-36 bg-orange-500 rounded-full text-black flex justify-center items-center'>
                 <h3 className='text-2xl font-bold tracking-tighter'>
                   {completedTasks.length}/{totaltasks}
                 </h3>
            </div>

       </div>
    </div>
  )
}
export default counter