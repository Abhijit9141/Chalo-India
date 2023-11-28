import { useState } from "react";
import img from "../../image/istockphoto-1276510348-1024x1024.jpg";
import Styles from "./PublishDetails.module.css";
import { AiOutlineArrowRight , AiOutlineArrowLeft} from "react-icons/ai";

const PublishDetails = () =>{
    
    let [value , setValue] = useState(1);
    const valueHandler1 = () =>{
        if(value<=1){
            setValue(3);
        }else{
            setValue(value-1);
        }
        
    }
    const valueHandler2 = () =>{
        if(value>=3){
            setValue(1);
        }else{
            setValue(value+1);
        }
    }
    return(
        <>
        <div className={Styles["publish-details-form"]}>
            <div className={Styles["publish-details"]}>
                <div className={Styles["publish-img"]}>
                <img alt="img" src={img} id="img"/>
                </div>
                <div className={Styles["publish-logo-info"]}>
                <AiOutlineArrowLeft className={Styles["publish-logo"]} onClick={valueHandler1}/>
                {value===1 &&
                <div className={Styles["publish-info"]}>
                    <h4>1 years of using Chalo-India app, dozens of journeys, as many meetings and exchanges, not a single disappointment. THANK YOU!</h4>
                    <p>Abhi</p>
                </div>
                }
                
                {value===2 &&
                <div className={Styles["publish-info"]}>
                    <h4>The benefit is always mutual, it only takes one passenger to turn a simple ride into an unexpected journey.</h4>
                    <p>Aditya</p>
                </div>
                }
                {value===3 &&
                <div className={Styles["publish-info"]}>
                    <h4>More than 400rs paid into my account thanks to Chalo-India, even though I've only been using it for a few months... There's no denying how good their app is!</h4>
                    <p>omkar</p>
                </div>
                }
                <AiOutlineArrowRight className={Styles["publish-logo2"]} onClick={valueHandler2}/>
                </div>
            </div>
            <div className={Styles["publish-span-div"]}>
                <span className={Styles["spanublish-span"]} style={value===1 ? {backgroundColor:"white"} : {backgroundColor:""}}></span>
                <span className={Styles["spanublish-span"]} style={value===2 ? {backgroundColor:"white"} : {backgroundColor:""}}></span>
                <span className={Styles["spanublish-span"]} style={value===3 ? {backgroundColor:"white"} : {backgroundColor:""}}></span>
            </div>
        </div>

        {/* <div>
            <h1 className={Container.width} style={{color:"#054652", fontSize:"3em" , paddingTop:"1em" }}>Publish your ride in just minutes</h1>
        <div className={Styles["publish-details-form"]}>
            <div className={Styles["publish-details"]}>
                <div className={Styles["publish-img"]}>
                <video autoPlay loop >
                    <source src="" />
                </video>
                </div>
                <div className={Styles["publish-logo-info"]}>
                
                </div>
            </div>
            
        </div>
        </div> */}
        </>
    )
}
export default PublishDetails;