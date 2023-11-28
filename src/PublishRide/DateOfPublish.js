import Styles from "../GrantAccess/SignUp/SignUpEmail.module.css";
const DateOfPublish = () =>{
    const today = new Date()
    return(
        <>
        <section>
        <div className={Styles["input-details"]}>
            <p>When you are going?</p>
            <div>
            {today.getDate}
            <br/>
            
            </div> 
        </div>
        </section>
        </>
    )
}
export default DateOfPublish;