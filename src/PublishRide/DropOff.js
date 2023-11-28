import { useState } from "react";
import Styles from "../GrantAccess/SignUp/SignUpEmail.module.css";
import UrlData from "./UrlData";

const DropOff = () =>{

    let sendValue = 1;
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
            <p>Where would you like to drop-off passengers?</p>
            <div>
            <input type="text" placeholder="Enter Drop-Off point" value={getUrlData} onChange={changeHandler}/>
            <br/>

            </div> 
        </div>
        </section>
        {getUrlData.length>2 && <UrlData urlData={getUrlData} inputValue={propsValue} shareValue={sendValue}/>}
        </>
    )
}
export default DropOff;