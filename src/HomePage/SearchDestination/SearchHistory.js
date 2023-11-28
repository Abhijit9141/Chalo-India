import axios from "axios";
import Style from "./SearchHistory.module.css";
import { AiOutlineRight ,AiOutlineArrowRight } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { useState ,useEffect } from "react";

const SearchHistory = () =>{
    const [SearchHistory , setSearchHistory] = useState([]);
    const fetchData = async() =>{
        const url = "http://localhost:5000/v1/dest/location";
        const res = await axios.get(url);
        setSearchHistory(res.data);
    }

    useEffect(()=>{
        fetchData()
    },[])
    return(
        <>     
        <div className={Style['search-result']}> {SearchHistory.map((value , id) =>{
            return(
            
            <div key={id} className={Style["search-history"]}>
                <div>
                
                <div className={Style["dest-city"]}>
                <BsClock className={Style["icon1-details"]} style={{marginRight:"0.6em",marginLeft:"0" ,marginTop:"0.5em"}}/>
                <p>{value.dest1}</p>
                <p><AiOutlineArrowRight className={Style["icon1-details"]} /></p>
                <p>{value.dest2}</p>
                </div>
                <AiOutlineRight className={Style["icon2-details"]}/>
                </div>
                <p className={Style["passenger-count"]}>{value.passengerCount} {value.passengerCount===1 ? "passenger" : "passengers"}</p>
            </div>
            )
        })}</div>
        
        </>
    )
}
export default SearchHistory;