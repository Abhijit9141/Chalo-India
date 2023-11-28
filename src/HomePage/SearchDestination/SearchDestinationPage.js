import SearchDestanationForm from "./SearchDestanationForm";
import SearchHistory from "./SearchHistory";
const SearchDestanationPage = (props) => {
    const value = props.values;

return(
    <>
    <SearchDestanationForm truthData = {value}/>
    {value && <SearchHistory />}
    </>
)
}
export default SearchDestanationPage;