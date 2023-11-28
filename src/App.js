import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import HomePage from './HomePage/HomePage';
import RootLayout from './HomePage/Root';
import SignUp from "./GrantAccess/SignUp/SignUp";
import LogIn from "./GrantAccess/LogIn/LogIn";
import LogInName from "./GrantAccess/LogIn/LogInName";
import UrlError from "./HomePage/UrlError";
import SearchCars from "./AfterAccsess/SearchCars";
import NavRoot from "./GrantAccess/NavRoot";
import SignUpEmail from "./GrantAccess/SignUp/SignUpEmail";
import SignUpName from "./GrantAccess/SignUp/SignUpName";
import SignUpPassword from "./GrantAccess/SignUp/SignUpPassword";
import SignUpConfirmPassword from "./GrantAccess/SignUp/SignUpConfirmPassword";
import SearchHistory from "./HomePage/SearchDestination/SearchHistory";
import PublishRideHome from "./PublishRide/HomePage/PublishRideHome";
import PickUp from "./PublishRide/PickUp";
import DropOff from "./PublishRide/DropOff";

function App() {
 
  const route = createBrowserRouter([
    { path:"/",
      element:<RootLayout />,
      errorElement: < UrlError/>,
      children:[
      {index:true , element:<HomePage />},
      {path:"publish-ride" , element:<PublishRideHome />},
    ]
  },
  {
    path:"/",
    element:<NavRoot />,
    children:[
      {path:"publish-ride/pick-up", element:<PickUp />},
      {path:"publish-ride/drop-off", element:<DropOff />}
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