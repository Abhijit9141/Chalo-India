import { useState } from "react";
import Styles from "./AddResult.module.css";
import { AiOutlinePlusCircle ,AiOutlineMinusCircle } from "react-icons/ai";


const AddResult = (props) =>{
    
    const[value , setValue] = useState(1);
    const[getValid , setValid] = useState({
        plus:false,
        minus:true
    });
    const changeValuePlusHandler = () =>{
        if(value>=8){
           return setValid({plus:true});
        }
        
        setValid({minus:false})
        setValue(value + 1);
    }
    const changeValueMinusHandler = () =>{
        if(value<=1){
            return setValid({minus:true});
        }
        setValid({plus:false})
        setValue(value - 1);
    }
    props.InputValue(value);
    return(

        <>
        <div className={Styles["add-passanger"]}>
        <p>{value <= 1 ? "Passenger" : "Passengers"}</p>
        <div>
        <p onClick={changeValuePlusHandler}><AiOutlinePlusCircle className={getValid.plus ? Styles.isValid : ""}/></p>
        <h5>{value}</h5>
        <p onClick={changeValueMinusHandler}><AiOutlineMinusCircle className={getValid.minus ? Styles.isValid : ""}/></p>
        </div>
        </div>
        </>
    )
}

export default AddResult;

