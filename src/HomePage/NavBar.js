import { useState } from "react";
import styles from "./NavBar.module.css";
import { FaSistrix,FaUserLarge } from "react-icons/fa6";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";
import img from "../HomePage/image/logo2.png";
import UserPage from "./UserPage";
import classes from "./HomePage.module.css";
const NavBar = () =>{
    const [getLoginPage , setLoginPage ] = useState(false);
    const loginCreditial = () =>{
        if(!getLoginPage)
        {
            setLoginPage(true);
        }
        else{
            setLoginPage(false);
        }
    }
    return(
        <>
        <header className={classes.header}>
        <nav className={`${styles.nav} ${styles.container} `}>
        <div className={styles.flex} >
        <img src={img} alt="img" id="img"/>
            <div className={`${styles.flex} ${styles["nav-items"]}`} >
                <FaSistrix className={styles.icons}/>
                <h1>Search</h1>
                <AiOutlinePlusCircle className={styles.icons}/>
                <h1>Publish Ride</h1>
                <div onClick={loginCreditial}>
                <FaUserLarge className={styles["user-icon"]} />
                <MdExpandMore className={`${styles.icons2} ${getLoginPage ? styles.true : ""}`}/>
                </div>
            </div>
        </div>
        {getLoginPage && <UserPage />}
    </nav>
    </header>
    </>
    )
}

export default NavBar;
