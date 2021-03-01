import OneListing from "./OneListing"
import ReviewCard from "./ReviewCard"
function Review({listing}){
    console.log(listing.reviews)
    const reviewRender = listing.reviews.map((review) =>{
        return(
        <ReviewCard review = {review} key = {review.id}/>
    )
    }
    )
    return(
        <div>
            Previous Tenant Reviews
            {reviewRender}
        </div>
    )
}

export default Review; 