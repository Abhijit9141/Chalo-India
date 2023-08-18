import { useState } from "react";
import Styles from "./SignUp.module.css"
const SignUp = () =>{
    const[getName , setName] = useState("");
    const[getPhone , setPhone] = useState("");
    const[getEmail , setEmail] = useState("");
    const[getPassword , setPassword] = useState("");
    const[getConfirmPassword , setConfirmPassword] = useState("");

    const nameChange = () =>{
        setName();
    }
    const phoneChange = () =>{
        setPhone();
    }
    const emailChange = () =>{
        setEmail();
    }
    const passwordChange = () =>{
        setPassword();
    }
    const confirmPasswordChange = () =>{
        setConfirmPassword();
    }
    const submitHandler = (event) =>{
        event.preventDefault();
    }
    
    return(
        <>
        
        <form onSubmit={submitHandler}>
            <div className={Styles.form}>
                <div>
                <div>
                    <input type="text" id="name" value={getName} placeholder="Enter your name" onChange={nameChange}/><br />
                    <input type="text" inputmode="numeric" id="phone" value={getPhone} placeholder="Enter your phone number" onChange={phoneChange}/><br />
                    <input type="email" id="email" value={getEmail} placeholder="Enter your email" onChange={emailChange}/><br />
                    <input type="password" id="password" value={getPassword} placeholder="Enter your password" onChange={passwordChange}/><br />
                    <input type="password" id="confirmPassword" value={getConfirmPassword} placeholder="Enter your confirmPassword" onChange={confirmPasswordChange}/><br />
                    <button>SignUp</button>
                </div>
                </div>
            </div>
        </form>
        </>
    )
}
export default  SignUp;