import OneListing from "./OneListing"
import ReviewCard from "./ReviewCard"
import ReviewForm from "./ReviewForm"
function Review({listing}){
    console.log(listing.user_id)
    const reviewRender = listing.reviews.map((review) =>{
        return(
        <ReviewCard review = {review} key = {review.id}/>
    )
    }
    )
    return(
        <div>
            <br>
            </br>
            <ReviewForm listing = {listing}/>
            <br></br>
            Previous Tenant Reviews
            {reviewRender}
        </div>
    )
}

export default Review; 