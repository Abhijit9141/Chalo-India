import { TbShieldCheck } from "react-icons/tb";
import { FaCoins} from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import styles from "../../HomePage/AboutTravel.module.css";
import Container from "../../HomePage/Container.module.css";
import PublishDetails from "./PublishDetails";
const AboutPublishRide = () =>{
    return(
        <>
        <h1 className={Container.width} style={{color:"#054652", fontSize:"4em" , paddingTop:"1em" ,paddingLeft:"1em" }}>The best of carpooling with Chalo-India</h1>
        <div className={`${styles["about-info"]} ${Container.width} `} >
        <div>
            <FaCoins className={styles.logo} style={{color:"#00aff5"}}/>
            <h1>Save on travel costs</h1>
            <p>Share your ride with passengers on your way, and save every time you travel by car. Sign up as a driver to start saving on travel costs.</p>
        </div>
        <div style={{width:"100%"}}>
            <TbShieldCheck className={styles.logo} style={{color:"#00aff5"}}/>
            <h1>Join a trustworthy community</h1>
            <p>We know each of our members: both drivers and passengers. We verify ratings, profiles and IDs, so you know exactly who you’re travelling with.</p>
        </div>
        <div>
            <HiOutlineRocketLaunch className={styles.logo} style={{color:"#00aff5"}}/>
            <h1>Carpooling made simple</h1>
            <p>Our technology makes the entire experience with BlaBlaCar simple, so you can easily find, chat with and meet passengers right on your way.</p>
        </div>
        </div>
        <PublishDetails />
        </>
    )
}

export default AboutPublishRide;