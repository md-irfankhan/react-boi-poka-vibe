import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './components/Home/Home.jsx';
import Book from './components/Book/Book.jsx';
import ReadList from './components/ReadList/ReadList.jsx';
import Error from './components/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    
    element: <App></App>,
    
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'book/:bookId',
        loader:()=>fetch('/public/api/booksData.json'),
        element:<Book></Book>
      },
      {
        path:"/read",
        loader:()=>fetch('/public/api/booksData.json'),
        element:<ReadList></ReadList>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
 
     <RouterProvider router={router} />
  ,
)
