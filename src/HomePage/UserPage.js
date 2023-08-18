import Styles from "./UserPage.module.css";
// import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
const UserPage = () => {
    return(
        <>
        <div className={Styles["user-page"]}>
        <div >
           <Link to="/LogIn" className={Styles["link-tag"] }> <p>Login </p> </Link> 
            <Link to="/SignUp" className={Styles["link-tag"]}> <p>SignUp</p></Link>
        </div>
        </div>
        </>
    )
}
export default UserPage;