import Styles from "./SearchResult.module.css"
import { AiOutlineRight } from "react-icons/ai";
const SearchResult = (props) =>{
    
    const valueHandler = (event) =>{
        let data = event.target;
        const res = data.textContent;
        console.log(props.value)
        if(props.value === 1){
            props.getSecondUpdatedValue(res);
        }
        else if(props.value === 2){
            props.getUpdatedValue(res);
        }
        console.log(event.target.value);
        
    }
    return(
        <>
        
        <div className= {Styles["search-results"] } style={props.value ===1 ? {margin:"10% 35%"} :{margin:"10% 20%"}} >
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