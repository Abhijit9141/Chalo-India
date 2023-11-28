import Styles from "./SearchResult.module.css"
import { AiOutlineRight } from "react-icons/ai";
const SearchResult = (props) =>{
    
    const valueHandler = (event) =>{
        let data = event.target;
        const res = data.textContent;
        console.log(data)
        if(props.value === 1 || props.value === 3){
            props.getSecondUpdatedValue(res);
        }
        
        else if(props.value === 2 || props.value === 0){
            console.log(props.value===0)
            props.getUpdatedValue(res);
        }
        props.setvalueApi(false)
        
    }
    return(
        <>
        
        <div className= {Styles["search-results"] }  style={props.value ===1 ? {margin:"12% 35%"} :{margin:"7% 35%"} && props.value ===0 ? {margin:"10% 20%"} : {margin:"7% 20%"} && props.value ===3?{margin:"10% 35%"} :{margin:"12% 20%"} } >
            {console.log(props.value)}
        {props.results.map((value , id)=>{
           return <div key={id} className={Styles["resutls-item"]} >
            <div onClick={valueHandler}>{value.name}<br/> {value.adminName1}, {value.countryName} </div>

            {value.name && <AiOutlineRight className={Styles.icon}/>}
           </div>
        
        })}
        </div>
        
        </>
    )
}
 export default SearchResult;