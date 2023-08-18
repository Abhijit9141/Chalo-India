import Container from "./Container.module.css";
import Style from "./LinkDetails.module.css";
import img from "../HomePage/image/logo2.png"
const LinkDetails = () =>{
    return(
        <>
        <div className={`${Style["diff-links"]}`}>
        <div className={`${Container.width}`}>
          <h1>About</h1>
          <p>How It Works</p>
          <p>About Us</p>
          <p>Help Centre</p>
          <p>Press</p>
        </div>
        </div>
        <div>
            <div className={`${Container.width} ${Style.footer} ${Style.flex}`}>
            <p>Terms and conditions</p>
            <div className={`${Style.flex}`}>
            <p><img src={img} alt="img"/>Chalo-India,2023</p>
            </div>
            </div>
        </div>
        </>
    )
}
export default LinkDetails;