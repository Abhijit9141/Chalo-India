import LinkDetails from "../../HomePage/LinkDetails";
import AboutPublishRide from "./AboutPublishRide";
import HelpDetails from "./HelpDetails";
import PublishRideForm from "./PublishRideForm";
import Styles from "./PublishRideHome.module.css"
import UserQue from "./UserQue";
const PublishRideHome = () =>{
    
    return(
        <>
        <header >
            <div className={Styles["ride-img"]}>
                <h1>Become a Chalo-India's driver and save on travel costs by sharing your ride with passengers.</h1>
                <div className={Styles["destination-form"]}>
                    <PublishRideForm/>
                </div>
            </div>
        </header>
        <section>
            <AboutPublishRide />
            <HelpDetails />
            <UserQue />
            <LinkDetails />
        </section>
        </>
    )
}
export default PublishRideHome;