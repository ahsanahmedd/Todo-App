import React from 'react'
import Header from "./components/header"
import Counter from "./components/counter"
import Form from "./components/addform"
import Tasks from "./components/tasks"






const App = () => {
  return (
    <div className=' w-full h-screen overflow-x-hidden overflow-y-auto bg-black text-white '>

     <Header/>
     <Counter/>
     <Form/>
     <Tasks/>

    </div>
  )
}

export default App