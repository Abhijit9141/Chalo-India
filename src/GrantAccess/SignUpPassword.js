import useValidInput from "./use-ValidInput";
import Styles from "./SignUpEmail.module.css";
import { Link } from "react-router-dom";
const SignUpPassword = () =>{
    
    const {
                hasError:passwordhaserror,
                value:passwordvalue,
                userInput:passwordInput,
                inputBulrHandler:passwordblurhandler
                
            } = useValidInput(input => input.length >= 6);

    const validInput = !passwordhaserror;
    
    return(
        <>
        
        <section>
        <div className={Styles["input-details"]}>
            <p>Define your password</p>
            <div>
            <input type="password" 
                     value={passwordvalue}
                     placeholder="Password" 
                     onChange={passwordInput}
                     onBlur={passwordblurhandler}
            />
            <br/>
            
            {validInput && <Link to="../confirmpassword"><button>Continue</button></Link>}
            </div> 
        </div>
        </section>
        </>
    )
}

export default SignUpPassword;