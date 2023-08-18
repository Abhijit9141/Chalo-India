import styles from "./SearchDestanationForm.module.css"
import {  IoPersonOutline  } from "react-icons/io5";
import {  CgShapeCircle } from "react-icons/cg";
const SearchDestanationForm = () =>{
    return(
        <>
        <form className={styles.form}>
            <div>
            <label htmlFor="leave" className={styles.icons1}><CgShapeCircle /></label>
            <input type="text" placeholder="Leaving From..." id="leave" />
            <label htmlFor="go" className={styles.icons1}><CgShapeCircle /></label>
            <input type="text" placeholder="Going To..." id="go"/>
            <input type="Date"/>
            <label htmlFor="number" className={styles.icons}><IoPersonOutline/></label>
            <input type="number" value="1" id="number"></input>
            </div>
            <button>Search</button>
        </form>
        </>
    )
}
export default SearchDestanationForm;