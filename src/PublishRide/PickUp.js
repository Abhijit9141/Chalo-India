import Styles from "../GrantAccess/SignUp/SignUpEmail.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import UrlData from "./UrlData";
const PickUp = () =>{

    let sendValue = 0;
    const[getUrlData , setUrlData] = useState("");
    const changeHandler = (event) =>{
        setUrlData(event.target.value);
    }
const propsValue = (data) =>{
    setUrlData(data);
    }
    return(
        <>

        <section>
        <div className={Styles["input-details"]} style={{marginTop:"-2%"}}>
            <p>Where would you like to pick up passengers?</p>
            <div>
            <input type="text" placeholder="Enter Pick-Up point" value={getUrlData} onChange={changeHandler}/>
            <br/>
            </div> 
        </div>
        </section>
        {getUrlData.length>2 && <UrlData urlData={getUrlData} inputValue={propsValue} shareValue={sendValue}/>}
        </>
    )
}
export default PickUp;