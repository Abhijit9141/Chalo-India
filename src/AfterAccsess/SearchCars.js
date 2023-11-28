import NavBar from "../HomePage/NavBar";
// import SearchDestanationForm from "../HomePage/SearchDestanationForm";
import SearchDestanationPage from "../HomePage/SearchDestination/SearchDestinationPage";
import Styles from "./SearchCars.module.css"
const SearchCars = () =>{
    const value = true;
    return(
        <>
        <div >
            <NavBar values = {value}/>
            <h1 className={Styles.sent}>Find a ride</h1>
            {/* <SearchDestanationForm values={value}/> */}
            <SearchDestanationPage values={value}/>
        </div>
        </>
    )
}
export default SearchCars;