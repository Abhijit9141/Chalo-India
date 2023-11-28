import { PiChats } from "react-icons/pi";
import { AiOutlineCar} from "react-icons/ai";
import { TbShieldCheck } from "react-icons/tb";
import styles from "../../HomePage/AboutTravel.module.css";
import Container from "../../HomePage/Container.module.css";

const HelpDetails = () =>{
    return(
        <>
        <div style={{backgroundColor:"#EDEDED"}}>
        <h1 className={Container.width} style={{color:"#054652", fontSize:"4em" ,  paddingTop:"1em" ,paddingLeft:"1em" }}>We’re here every step of the way</h1>
        <div  className={`${styles["about-info"]} ${Container.width} ` } style={{backgroundColor:"#EDEDED" }}>
        <div style={{marginTop:"2.5em"}}>
            <PiChats className={styles.logo}/>
            <h1>At your service 24/7</h1>
            <p>Our team is at your disposal to answer any questions by email or social media. You can also have a live chat directly with experienced members.</p>
        </div>
        <div style={{width:"100%", marginTop:"2.5em"}}>
            <AiOutlineCar className={styles.logo}/>
            <h1>Chalo-India at your side</h1>
            <p>For just 2 €, benefit from the reimbursement of up to 1,500€ of your excess when you publish a ride as a driver on BlaBlaCar.</p>
        </div>
        <div style={{marginTop:"2.5em"}}>
            <TbShieldCheck className={styles.logo}/>
            <h1>100% secure information</h1>
            <p>Our team is dedicated to the protection of your data, which is always 100% confidential thanks to monitoring tools, secure navigation and encrypted data.</p>
        </div>
        </div>
        </div>
            
        </>
    )
}
export default HelpDetails;