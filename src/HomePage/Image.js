import styles from "./Image.module.css"
// import SearchDestanationForm from "./SearchDestanationForm";
import SearchDestanationPage from "./SearchDestination/SearchDestinationPage";
const Image = () =>{
    return(
        <>
        <div className={styles["header-image"]}>
            <h1>Carpool to thousands of destinations at low prices</h1>
            {/* <SearchDestanationForm /> */}
            <SearchDestanationPage />
        </div>
        </>
    )
}

export default Image;