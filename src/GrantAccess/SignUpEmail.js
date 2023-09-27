import useValidInput from "./use-ValidInput";
import Styles from "./SignUpEmail.module.css";
import { Link } from "react-router-dom";
const SignUpEmail = () =>{
    const {
        hasError:phonehasError,
        value:phonevalue,
        userInput:phoneInput,
        inputBulrHandler:phoneblurhandler
     } = useValidInput(input => input.length === 10);
 
     const {
         hasError:emailhaserror,
         value:emailvalue,
         userInput:emailInput,
         inputBulrHandler:emailblurhandler
     } = useValidInput(input => input.includes("@"));
     const validInput = !emailhaserror && !phonehasError;
      
     console.log(validInput)
    return(
        <>
        <section>
        <div className={Styles["input-details"]}>
            <p>What's your Email and Mobile number?</p>
            <div>
            <input type="text" 
                    inputMode="numeric"
                    value={phonevalue}  
                    placeholder="Phone" 
                    onChange={phoneInput} 
                    onBlur={phoneblurhandler}
            />
            <br />
                    <input type="email" 
                    value={emailvalue}
                    placeholder="Email" 
                    onChange={emailInput} 
                    onBlur={emailblurhandler}
            />
            <br />
            
            {validInput && <Link to="../name"> <button>Continue</button> </Link>}
            </div> 
        </div>
        </section>
        </>
    )
}
export default SignUpEmail;