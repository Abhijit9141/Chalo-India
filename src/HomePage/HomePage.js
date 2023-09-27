import Image from "./Image";
import AboutTravel from "./AboutTravel";
import UseDetails from "./UseDetails";
import LinkDetails from "./LinkDetails";
const HomePage = () =>{
    
return(
    <>
    <section>
        <Image />
        <AboutTravel />
        <UseDetails />
    </section>
    <footer>
        <LinkDetails />
    </footer>
    </>
)
}

export default HomePage;