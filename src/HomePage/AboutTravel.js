import { TfiDirection } from "react-icons/tfi";
import { LiaIdCard} from "react-icons/lia";
import { PiCarProfileDuotone } from "react-icons/pi";
import styles from "./AboutTravel.module.css";
import Container from "./Container.module.css";


const AboutTravel = () =>{
    return(
        <>
    
        <div className={`${styles["about-info"]} ${Container.width} `}>
        <div>
            <TfiDirection className={styles.logo}/>
            <h1>Travel at low prices</h1>
            <p>Wherever you are going, there is a carpool that will get you there for less.</p>
        </div>
        <div>
            <LiaIdCard className={styles.logo}/>
            <h1>Trustworthy and simple</h1>
            <p>We check reviews, profiles and IDs, so you know who you are travelling with; and our app is both simple and secure thanks to powerful technology.</p>
        </div>
        <div>
            <PiCarProfileDuotone className={styles.logo}/>
            <h1>Proximity makes it easier</h1>
            <p>No need to travel across town, catch a ride leaving near you.</p>
        </div>
        </div>
        
        <div className={`${styles["about-document"]}`}>
            
            <div className={styles.info}>
            <h1>Your safety is our priority</h1>
            <p>At Chalo-India, we're working hard to make our platform as secure as it can be. But when scams do happen, we want you to know exactly how to avoid and report them. Follow our tips to help us keep you safe.</p>
            <button>Learn More</button>
            </div>
            <div></div>
        </div>

        <div className={`${styles["about-ride"]} ${Container.width} `}>
            <div></div>
            <div>
            <h1>Driving in your car soon?</h1>
            <p>Good news, drivers: get rewarded for your good habits! Earn the Carpool Bonus by completing 3 carpools in 3 months. See eligibility conditions.</p>
            <button>Offer a Ride</button>
            </div>
        </div>
        
        </>
    )
}

export default AboutTravel;