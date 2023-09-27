import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import HomePage from './HomePage/HomePage';
import RootLayout from './HomePage/Root';
import SignUp from "./GrantAccess/SignUp";
import LogIn from "./GrantAccess/LogIn";
import LogInName from "./GrantAccess/LogInName";
import UrlError from "./HomePage/UrlError";
import SearchCars from "./AfterAccsess/SearchCars";
import NavRoot from "./GrantAccess/NavRoot";
import SignUpEmail from "./GrantAccess/SignUpEmail";
import SignUpName from "./GrantAccess/SignUpName";
import SignUpPassword from "./GrantAccess/SignUpPassword";
import SignUpConfirmPassword from "./GrantAccess/SignUpConfirmPassword";
import SearchHistory from "./HomePage/SearchHistory";

function App() {
 
  const route = createBrowserRouter([
    { path:"/",
      element:<RootLayout />,
      errorElement: < UrlError/>,
      children:[
      {index:true , element:<HomePage />},

    ]
  },
  {
    path:"LogIn",
    children:
  [
    {index:true , element:<LogIn />},
    {path:"loginName" , element:<LogInName />},
  ]
  },

  {  path:"SignUp" , 
     element:<NavRoot />,
     children:[
      {index:true , element:<SignUp />},
      {path:"email" , element:<SignUpEmail/>},
      {path:"name" , element:<SignUpName/>},
      {path:"password" , element:<SignUpPassword/>},
      {path:"confirmpassword" , element:<SignUpConfirmPassword/>},
    ]
  },
  {
    path:"stored-data",
    element:<SearchHistory />
  },
  {
    path:"Search-Cars" , 
    element:<SearchCars />
  },
    
  ])
  return(
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App;

// /home/abhi