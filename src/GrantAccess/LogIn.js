import Styles from "./SignUp.module.css";
const LogIn = () => {
    return(
        <>
        
        <form >
            <div className={Styles.form}>
                <div>
                <div>
                    <input type="text" inputmode="numeric" id="phone" placeholder="Enter your phone number" /><br />
                    <input type="password" id="password" placeholder="Enter your password" /><br />
                    <button>LogIn</button>
                </div>
                </div>
            </div>
        </form>
        
        </>
    )
}
export default LogIn;