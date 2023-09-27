import { useState } from "react";

const useValidInput = (validate) =>{

    const[checkValidInput , setValidInput] = useState("");
    const validInput = validate(checkValidInput);
    const hasError = !validInput ;
    const userInput = (event) =>{
        setValidInput(event.target.value);
    }
    
    return{
        value:checkValidInput,
        hasError,
        userInput
    }
}

export default useValidInput