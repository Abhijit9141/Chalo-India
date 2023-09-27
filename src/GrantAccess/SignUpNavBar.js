import Styles from "./SignUpNavBar.module.css";
import img from "../HomePage/image/logo2.png";
const SignUpNavBar = () =>{
    return(
        <>
        <header>
        <nav>
        <div className={Styles.logo}>
        <img  src={img} alt="img" id="img"/>
        <h1>Chalo-India</h1>
        </div>
        </nav>
        </header>
        </>
    )
}

export default SignUpNavBar;