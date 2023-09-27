import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import NavBar from "../HomePage/NavBar";
import Styles from "./SignUp.module.css"
const LogIn = () =>{
    const value = true;
    
    return(
        <>
        <NavBar values = {value} />
        <header >
            <div className={Styles["signup-details"]}>
                <p>How do you want to log in?</p>
                <div className={Styles["select-signup"]}>
                <div>
                    <Link to="loginname" className={Styles.link}>Continue With Phone Number</Link>
                    <AiOutlineRight />
                </div>
                <div>
                    <Link className={Styles.link}>Continue With Google</Link>
                    <AiOutlineRight />
                </div>
                </div>
            </div>
            <div className={Styles["already-member"]}>
                <p>Not a member yet?<Link to="../signup" className={Styles.p}>Sign up</Link></p>
            </div>
        </header>
        </>
    )
}

export default LogIn; 