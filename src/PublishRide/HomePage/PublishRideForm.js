import {  IoPersonOutline  } from "react-icons/io5";
import {  CgShapeCircle } from "react-icons/cg";
import Styles from "./PublishRideForm.module.css"
import { useState } from "react";
import axios from "axios";
import AddResult from "../../HomePage/SearchDestination/AddResult";
import { Link } from "react-router-dom";

const PublishRideForm = () =>{

    const[getValue  , setValue] = useState(1);
    const checkValue = true;
    const Changevalue = (data) =>{
        setValue(data);
    }

    const [showInput , setShowInput] = useState(false);
    const numberHandler = () =>{
        if(showInput === false){
            setShowInput(true);
        }
        else{
            setShowInput(false)
        }  

    }
    const[fetchInput , setFetchInput] = useState([""]);
    console.log(fetchInput);
    const[getInput , setInput] = useState("");

    const fetchData = async(value) =>{
        const res = await axios.get(`http://api.geonames.org/searchJSON?q=${value}%20&maxRows=5&username=abhijit123&country=IN&name_startsWith=${value}`);
        setFetchInput(res.data.geonames);
    }
    const valueHandler = (event) =>{
        fetchData(event.target.value);
        setInput(event.target.value);
    }
    return(
        <>
        <form>
        <div className={Styles["publish-ride"]}>
        <div className={Styles["publish-form"]}>
            <div>
            <label htmlFor="leave" ><CgShapeCircle /></label>
            <input type="text" value={getInput} placeholder="Leaving From..." id="leave" onChange={valueHandler} /> 
            </div>

            <div>
            <label htmlFor="go"><CgShapeCircle /></label>
            <input type="text" placeholder="Going to..." id="leave" />  
            </div>  
                            
            <div>      
            <label htmlFor="number"><IoPersonOutline/></label>
            <input type="text" inputmode="numeric" value={getValue>1 ?`${getValue} Passengers`:`${getValue}Passenger`} id="number" onClick={numberHandler} />
            </div>
            </div>
            <p>Save your travelling expenses</p>
            <Link to="./pick-up" style={{textDecoration:"none"}}><button >Publish Ride</button></Link>
        </div>
        </form>
        {showInput && <AddResult InputValue={Changevalue} setCheckValue={checkValue} />}
        
        </>
    )
}
export default PublishRideForm;