import styles from "./SearchDestanationForm.module.css";
import { useState } from "react";
import {  IoPersonOutline  } from "react-icons/io5";
import {  CgShapeCircle } from "react-icons/cg";
import AddResult from "./AddResult";
import axios from "axios";
import SearchResult from "./SearchResult";
import { Today } from "@material-ui/icons";

const SearchDestanationForm = (props) =>{

    const[getValue  , setValue] = useState(1);
    
    const Changevalue = (data) =>{
        setValue(data);
    }
    
    const value = props.truthData;
    const [showInput , setShowInput] = useState(false);
    
    
    const valueHandler = () =>{
        if(showInput === false){
            setShowInput(true);
        }
        else{
            setShowInput(false)
        }  

    }
                    //******************** fetch data***************************//
    const[getInput , setInput] = useState("");
    const[getSecondInput , setSecondInput] = useState("");
    const[tryValue , setTryValue] = useState(0);
    const[showApi , setApi] = useState(true)
    const[fetchInput , setFetchInput] = useState([""]);
    
    const fetchData = async(value) =>{
        const res = await axios.get(`http://api.geonames.org/searchJSON?q=${value}%20&maxRows=5&username=abhijit123&country=IN&name_startsWith=${value}`);
        setApi(true)
        setFetchInput(res.data.geonames);
    }
    
    const inputHandler = (event) =>{
        
        setInput(event.target.value);
        fetchData(event.target.value);
    }
    const secondInputHandler = (event) =>{
        
        setSecondInput(event.target.value);
        fetchData(event.target.value);
    }
    const firstChangeValue =() =>{
        setTryValue(1);
        fetchData(getSecondInput);
    }
    const firstChangeValue4 =() =>{
        setTryValue(3);
        fetchData(getSecondInput)
    }
    const firstChangeValue2 =() =>{
        if(value){

            setTryValue(2);
        }
        
        fetchData(getInput)
        
    }
    const firstChangeValue3 =() =>{
        setTryValue(0);
        fetchData(getInput)
    }
    const UpdateValue = (data) =>{
        if(data){
            setInput(data);
        }
    } 
    const UpdateSecondValue = (data) =>{
        if(data){
            setSecondInput(data);
        }
    } 
    const blurHandler = () =>{
        
        // setApi(false);
    }

          //***************************Data Sending to backend**********************************//
    const submitHandler = (e) =>{
        e.preventDefault();
        const url = "http://localhost:5000/v1/dest/location"
        const res = axios.post(url,{
            destName1:getInput,
            destName2:getSecondInput,
            passengerCount:getValue
        })
        console.log(res);
        setInput("");
        setSecondInput("");
        setValue(1);
    }
    

            //***************************Already Searched Data**********************************//
    

    return(
        <>
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={value ? styles.div1:""}>
            <label htmlFor="leave" className={styles.icons1}><CgShapeCircle /></label>
            {console.log(value)}
            {value ?
            <input type="text" className={styles.input} placeholder="Leaving From..." id="leave" value={getInput} onClick={firstChangeValue2} onBlur={blurHandler} onChange={inputHandler} />  
            :<input type="text" className={styles.input} placeholder="Leaving From..." id="leave" value={getInput} onClick={firstChangeValue3} onBlur={blurHandler} onChange={inputHandler}/> 
            }                   
            <label htmlFor="go" className={styles.icons1}><CgShapeCircle /></label>
            {value ?
            <input type="text" className={styles.input} placeholder="Going to..." id="leave" value={getSecondInput} onClick={firstChangeValue} onBlur={blurHandler} onChange={secondInputHandler}/>  
            :<input type="text" className={styles.input} placeholder="Going to..." id="leave" value={getSecondInput} onClick={firstChangeValue4} onBlur={blurHandler} onChange={secondInputHandler}/> 
            }
            
            <input type="Date" min={Today} />
            <label htmlFor="number" className={styles.icons}><IoPersonOutline/></label>
            <input type="text" inputmode="numeric" value={getValue} id="number" className={styles.inpnum} onClick={valueHandler} />
            <button>Search</button>
            </div>
            
        </form>
        {showInput && <AddResult InputValue={Changevalue} otherPage={value}/>}
        {
         ((getInput.length>1 || getSecondInput.length>1))
         && showApi
         && fetchInput.length>1 
         && <SearchResult results={fetchInput} 
         getUpdatedValue ={UpdateValue} 
         getSecondUpdatedValue ={UpdateSecondValue}
         value={tryValue}
         setvalueApi={setApi}
         />
         
        }
        </>
    )
}
export default SearchDestanationForm;