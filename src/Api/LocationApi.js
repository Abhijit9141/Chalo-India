// import axios from "axios"
// import { useState } from "react";

// const LocationApi = () =>{
//     const[getData , setData] = useState("")
//     const changeLocation = async(url) =>{
//         const res  = await axios.get(url);
//         console.log(res);
//         setData(res.data.geonames[0].name);
        
//         console.log(res.data.geonames);
//     };

        
//     const locationHandler = (event) =>{
        
//     const Api = `http://api.geonames.org/searchJSON?q=${event.target.value}%20&maxRows=5&username=abhijit123&country=IN&name_startsWith=${event.target.value}`;
//         changeLocation(Api);
        
//     }
    
//     const submitHandler = () =>{

//     }

//     return(
//         <>
//         <form onSubmit={submitHandler}>
//             <input type="text" placeholder="location" onChange={locationHandler}/>
//             <input type="text" placeholder="location"/>
//             <button>Submit</button>
//         </form>
//         {getData ? getData :""}

//         </>
//     )
    
// }

export default LocationApi;