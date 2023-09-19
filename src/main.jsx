import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Home from './Components/Home/Home.jsx';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Users from './Components/Users/Users.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path:'/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path:'/users',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      }
    ]
  }
])

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div className='text-5xl font-bold'>Hello world!</div>,
//   },
//   {
//     path: '/about',
//     element:<div className='text-5xl font-bold'>Router test</div>
//   },
//   {
//     path:'/app',
//     element:<App></App>
//   },
//   {
//     path:'/home',
//     element: <Home></Home>
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
