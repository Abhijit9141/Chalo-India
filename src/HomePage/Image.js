import styles from "./Image.module.css"
import SearchDestanationForm from "./SearchDestanationForm";
const Image = () =>{
    return(
        <>
        <div className={styles["header-image"]}>
            <h1>Carpool to thousands of destinations at low prices</h1>
            <SearchDestanationForm />
        </div>
        </>
    )
}

export default Image;