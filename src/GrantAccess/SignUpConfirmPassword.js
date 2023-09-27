import useValidInput from "./use-ValidInput";
import Styles from "./SignUpEmail.module.css"
const SignUpConfirmPassword = () =>{
    const {
                 hasError:confirmPassworderror,
                 value:confirmPasswordvalue,
                 userInput:confirmPasswordInput,
                 inputBulrHandler:confirmpasswordblurhandler
             } = useValidInput(input => input.length >= 6);
    const submitHandler = (event) =>{
        console.log(event);
        event.preventDefault();
        event.type = "next"
    }
    const validInput = !confirmPassworderror;
    return(
        <>
        <section>
        <form onSubmit = {submitHandler} className={Styles["input-details"]}>
            <p>Check your password</p>
            <div>
            <input type="password"  
                value={confirmPasswordvalue} 
                placeholder="ConfirmPassword"
                onChange={confirmPasswordInput} 
                onBlur={confirmpasswordblurhandler}
            />
            <br/>
            
            {validInput && <button >Submit</button>}
            </div> 
        </form>
        </section>
        </>
    )
}

export default SignUpConfirmPassword;