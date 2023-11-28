import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Styles from "./SignUp.module.css";
const SignUp = () =>{
    return(
        <>
        <header>
            <div className={Styles["signup-details"]}>
                <p>How do you want to sign up?</p>
                <div className={Styles["select-signup"]}>
                <div>
                    <Link to="email" className={Styles.link}>Continue With Phone Number</Link>
                    <AiOutlineRight />
                </div>
                <div>
                    <Link className={Styles.link}>Continue With Google</Link>
                    <AiOutlineRight />
                </div>
                </div>
            </div>
            <div className={Styles["already-member"]}>
                <p>Already a member?<Link to="../LogIn" className={Styles.p}>Log in</Link></p>
            </div>
        </header>
        </>
    )
}

export default SignUp; 