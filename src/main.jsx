import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import TodoContextProvider from './contexts/todocontext.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoContextProvider>
    <App />
    <ToastContainer/>
  </TodoContextProvider>
);
