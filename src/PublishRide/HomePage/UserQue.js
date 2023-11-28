import Container from "../../HomePage/Container.module.css";
import Style from "../../HomePage/UseDetails.module.css";

const UserQue = () =>{
    return(
        <>
        <div className={`${Style["use-details"]} ${Container.width}`} style={{marginTop:"-1em"}}>
            <h1>Everything you need as a driver, in our Help Centre</h1>
            <div style={{marginTop:"1em"}}>
                <div>
                <h1>How do I set the passenger contribution for my ride?</h1>
                <p style={{paddingTop:"1em" , fontSize:"1.5em"}}>We recommend a contribution per passenger on your rides. These suggestions help you set fair contributions for your rides (those most likely to get your seats filled!), but can still be adjusted within a margin of our recommendation.</p>
                <h1>What should I do if there’s an error with my ride?</h1>
                <p style={{paddingTop:"1.3em" , fontSize:"1.5em"}}>You should edit your ride as soon as you spot the error.If you can’t edit your ride because passengers have already booked, contact them explaining the mistake. If the changes don’t suit them, you should cancel your ride and publish a new one. </p>
                
                </div>
                <div>
                <h1>When do I get my money?</h1>
                <p style={{paddingTop:"1em" , fontSize:"1.5em"}}>We send your money 48 hours after the ride if you travelled as planned. You’ll get your money 1 to 5 weekdays (not counting weekends and holidays) after we send it.</p>
                
                <h1>How do I cancel a carpool ride as a driver of a ride?</h1>
                <p style={{paddingTop:"1em" , fontSize:"1.5em"}}>It only takes a minute to cancel a listed ride. However, if a driver cannot fulfill a ride that has been already booked, it is their responsibility to cancel in a timely manner to allow the passenger time to adjust their plans.</p>
                
                
                </div>
                
            </div>
            <button>See more answer</button>
        </div>
        </>
    )
}
export default UserQue;