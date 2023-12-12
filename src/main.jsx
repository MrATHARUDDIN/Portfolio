import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Components/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About';
import Project from './Components/Project/Project.jsx';
import ProjectDetails from './Components/Project/ProjectDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/Projects",
        element: <Project></Project>
      },
      {
        path: "/Projects/:id", 
        element: <ProjectDetails />,
        loader: () => fetch("project.json")
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='px-20 py-5'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);