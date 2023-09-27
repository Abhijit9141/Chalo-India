import axios from "axios";
import { useState } from "react";

const SearchHistory = () =>{
    const [SearchHistory , setSearchHistory] = useState([]);
    const fetchData = async() =>{
        const url = "http://localhost:5000/v1/dest/location";
        const res = await axios.get(url);
        setSearchHistory([res.data]);
        
    }
    return(
        <>
        <div>
            <p onClick={fetchData}>hii</p>
               
         {SearchHistory.map((value , id) =>{
            return(
            <p key={id}>
            {value.dest1}{value.dest2}
            {value.passengerCount}
            </p>
            )
        })}
        </div>
        </>
    )
}
export default SearchHistory;