import SignUpNavBar from "./SignUp/SignUpNavBar";
import {Outlet} from "react-router-dom"
const NavRoot = () =>{
    return(
        <>
        <main>
        <SignUpNavBar />
        </main>
        <Outlet />
        </>
    )
}

export default NavRoot;