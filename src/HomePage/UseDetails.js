import Container  from "./Container.module.css"
import Style from "./UseDetails.module.css"
const UseDetails = () =>{
    return(
        <>
        <div className={`${Style["use-details"]} ${Container.width}`}>
            <h1>Carpool Help Centre</h1>
            <div>
                <div>
                <h1>How do I book a carpool ride?</h1>
                <p>You can book a carpool ride on our mobile app, or on blablacar.com. Simply search for your destination, choose the date you want to travel and pick the carpool that suits you best!</p>
                <h1>How do I cancel my carpool ride?</h1>
                <p>If you have a change of plans, you can always cancel your carpool ride from the ‘Your rides’ section of our app. The sooner you cancel, the better. </p>
                <h1>How much does a carpool ride cost?</h1>
                <p>The costs of a carpool ride can vary greatly, and depend on factors like distance, time of departure, the demand of that ride and more.</p>
                </div>
                <div>
                <h1>How do I publish a carpool ride?</h1>
                <p>Offering a carpool ride on BlaBlaCar is easy. To publish your ride, use our mobile app or blablacar.com. Indicate your departure and arrival points, the date and time of your departure,</p>
                
                <h1>What are the benefits of travelling by carpool?</h1>
                <p>There are multiple advantages to carpooling, over other means of transport. Travelling by carpool is usually more affordable, especially for longer distances.</p>
                
                <h1>How do I start carpooling?</h1>
                <p>Carpooling with BlaBlaCar is super easy, and free! Simply sign up for an account and tell us some basic details about yourself. Once you have a BlaBlaCar account</p>
                </div>
                
            </div>
            <button>Read our Help Center</button>
        </div>
        </>
    )
}

export default UseDetails;