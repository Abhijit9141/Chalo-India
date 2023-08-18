import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import HomePage from './HomePage/HomePage';
import RootLayout from './HomePage/Root';
import SignUp from "./GrantAccess/SignUp";
import LogIn from "./GrantAccess/LogIn";
import GrantAccess from "./GrantAccess/GrantAccess";

function App() {
  const route = createBrowserRouter([
    {path:"/",
    element:<RootLayout />,
    children:[
      {path:"/" , element:<HomePage />},
    ]
    },

    {
      path:"/",
      children:[
        {path:"SignUp" , element:<SignUp />},
        {path:"LogIn" , element:<LogIn />}
      ]
    }
  ])
  return(
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App;

// /home/abhi