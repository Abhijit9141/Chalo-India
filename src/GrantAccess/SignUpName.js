import useValidInput from "./use-ValidInput";
import Styles from "./SignUpEmail.module.css";
import { Link } from "react-router-dom";
const SignUpName = () =>{

    const {
               hasError:namehasError,
               value:NameValue,
               userInput:NameInput,
               inputBulrHandler:nameblurhandler
        } = useValidInput((input) => input.trim() !=="");
    const {
               hasError:surnamehasError,
               value:surnameValue,
               userInput:surnameInput,
               inputBulrHandler:surnameblurhandler
        } = useValidInput((input) => input.trim() !=="");

     const validInput = !namehasError && !surnamehasError;
      
    return(
        <>
        <section>
        
        <div className={Styles["input-details"]}>
            <p>Enter your Name</p>
            <div>
            <input type="text" 
                     value={NameValue}
                     placeholder="Name" 
                     onChange={NameInput}
                     onBlur={nameblurhandler}
            />
            <br/>
            <input type="text" 
                     value={surnameValue}
                     placeholder="SurName" 
                     onChange={surnameInput}
                     onBlur={surnameblurhandler}
            />
            <br/>
            {validInput && <Link to="../password"><button>Continue</button></Link>}
            </div> 
        </div>
        </section>
        </>
    )
}
export default SignUpName;