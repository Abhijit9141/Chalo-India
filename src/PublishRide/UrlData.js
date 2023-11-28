import { useState,useEffect } from "react";
import axios from "axios";
import Style from "../HomePage/SearchDestination/SearchHistory.module.css";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const UrlData = (props) =>{
    const[getFetchInput , setFetchInput] = useState([""]);
    // console.log(props);
    // console.log(props.urlData);
    const navigate = useNavigate();
    const fetchData = async(value) =>{
        const res = await axios.get(`http://api.geonames.org/searchJSON?q=${value.urlData}%20&maxRows=4&username=abhijit123&country=IN&name_startsWith=${value.urlData}`);
        setFetchInput(res.data.geonames);
    }
    const clickHandler = (event) =>{
        props.inputValue(event.target.textContent)
        const nextPage = () =>{
            if(props.shareValue===0){
                navigate("../publish-ride/drop-off");   
            }
            else if(props.shareValue===1){
                navigate("./pick-up");   
            }
            
        }
        setTimeout(nextPage , 1500);
    }
    useEffect(()=>{
        fetchData(props);
    },[props])
    
    return(
        <>
        <div className={Style['search-result']} style={{marginTop:"4%" ,width:"40%",marginLeft:"30%"}}> {getFetchInput.map((value , id) =>{
            return(
            <div key={id} className={Style["search-history"]}  >
                <div>
                
                <div className={Style["dest-city"]} >
                <p onClick={clickHandler}> {value.name} , {value.adminName1} ,{value.countryName}</p>
                </div>
                <AiOutlineRight className={Style["icon2-details"]}/>
                </div>
            </div>
            )
        })}</div>
        </>
    )
}
export default UrlData;