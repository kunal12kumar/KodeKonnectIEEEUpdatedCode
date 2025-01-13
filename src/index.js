import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About_Hackthon from './Pages/About';
import RegistrationInstructions from './Pages/RegistrationInstruction';
import Timeline from './Pages/Timelinepage';


const root = ReactDOM.createRoot(document.getElementById('root'));
let allrouter=createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },
  {
    path:'/aboutpage',
    element:<About_Hackthon></About_Hackthon>
  },
  {
    path:'/registrationinstruction',
    element:<RegistrationInstructions></RegistrationInstructions>
  },
  {
    path:'/timeline',
    element:<Timeline></Timeline>
  }
])
root.render(
  <React.StrictMode>
     <RouterProvider router={allrouter}></RouterProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

