import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import HomePage from './HomePage'
import RegVaPage from './RegVaPage';
import RegUserPage from './RegUserPage';
import ModuleAspi from './ModuleAspi';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/RegVaPage",
    element: <RegVaPage />,
  },
  {
    path: "/RegUserPage",
    element: <RegUserPage/>
  },
  {
    path: "/ModuleAspi",
    element: <ModuleAspi/>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
