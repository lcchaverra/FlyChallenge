import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import HomePage from './HomePage'
import RegVaPage from './RegVaPage';
import RegUserPage from './RegUserPage';
import ModuleAspi from './ModuleAspi';
import ModuleVaca from './ModuleVaca';
import EditVaca from './components/EditVaca';
import Edit from './components/Edit';
import Login from './Login';
import { Dashboard } from './Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/RegVaPage",
    element: <RegVaPage/>,
  },
  {
    path: "/RegUserPage",
    element: <RegUserPage/>
  },
  {
    path: "/ModuleAspi",
    element: <ModuleAspi/>
  },
  {
    path: "/ModuleVaca",
    element: <ModuleVaca/>
  },
  {
    path: "/src/components/Edit/:id",
    element: <Edit/>
  },
  {
    path: "/src/components/EditVaca/:id",
    element: <EditVaca/>
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/Dashboard",
    element: <Dashboard/>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
