
import React, { createContext,useState } from "react";


export const TodoContext = createContext(null);

const TodoContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <TodoContext.Provider value={[tasks, setTasks]}>
        {children}
      </TodoContext.Provider>
    </div>
  );
};

export default TodoContextProvider;
