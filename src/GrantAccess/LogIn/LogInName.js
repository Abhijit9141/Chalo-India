import { useNavigate } from "react-router-dom";
import Styles from "../SignUp/SignUpEmail.module.css";
import NavBar from "../../HomePage/NavBar";
import useValidInput from "../use-ValidInput";
import axios from "axios";
import { useState } from "react";


const LogIn = () => {
    const[showError , getError] = useState("");
    const value = true;
    const navigate = useNavigate()
    
     const loginDetails = async() =>{

try{
    const url = "http://localhost:5000/v1/LogIn";
    const response = await axios.post(url,{
        phone:phonevalue,
        password:passwordvalue
    });
    if(response){
     console.log(response.data); 
     navigate("/Search-Cars");
    }   
}catch(e){
    getError(e.response.data.message);
    console.log(e.message);
}
     }

    const {
        hasError:passwordhaserror,
        value:passwordvalue,
        userInput:passwordInput,
        inputBulrHandler:passwordblurhandler
    } = useValidInput(input => input.length >= 6);
 
     const {
        hasError:phonehasError,
        value:phonevalue,
        userInput:phoneInput,
        inputBulrHandler:phoneblurhandler
     } = useValidInput(input => input.length === 10);

     const validInput = !phonehasError && !passwordhaserror;
     const submitHandler = (event) =>{
        console.log(event);
            event.preventDefault();
            loginDetails();
    }
    return(
        <>
        <NavBar values = {value}/>
        <form onSubmit={submitHandler}>
            <div className={Styles["input-details"]}>
                <p>What's your phone number and password?</p>
                <div>
                    <input type="text" 
                    inputMode="numeric" 
                    value={phonevalue}  
                    placeholder="Phone" 
                    onChange={phoneInput} 
                    onBlur={phoneblurhandler}
                    />
                    <br />

                    <input type="password"
                    value={passwordvalue}
                    placeholder="Password" 
                    onChange={passwordInput} 
                    onBlur={passwordblurhandler}
                    />
                    <br />
                    {showError && <p style={{ fontSize:"1.3em" ,fontWeight:"normal" ,marginLeft:"-31%" ,color:"red" }}>{showError}</p>}
                    <p style={{color:"#00aff5" , 
                              fontSize:"1.8em",
                              fontWeight:"600", 
                              marginLeft:"-24em"
                              }}>
                    Forget Password</p>
                  {validInput && <button>Log In</button>} 
                </div>
            </div>
        </form>
        
        </>
    )
}
export default LogIn;