import SignUpNavBar from "./SignUpNavBar";
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