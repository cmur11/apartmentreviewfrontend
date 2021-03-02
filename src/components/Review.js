import react, {useState} from "react"
import OneListing from "./OneListing"
import ReviewCard from "./ReviewCard"
import ReviewForm from "./ReviewForm"
function Review({listing,setListing}){
    const [newReview, setNewReview] = useState("")
    const [newRating, setNewRating] = useState("")
//    const [reviews,setReviews] = useState(listing.reviews)
    // console.log(reviews)
   
    
    console.log(listing.reviews)
    const reviewRender = listing.reviews.map((review) =>{
        return(
        <ReviewCard review = {review} key = {review.id}/>
    )
    }
    )
   
    function renderNewReview(newReview){
        setListing({...listing,reviews:[...listing.reviews,newReview]})
    }
    
    return(
        <div>
            <br>
            </br>
            <ReviewForm listing = {listing} newReview = {newReview} setNewReview = {setNewReview} newRating = {newRating} setNewRating = {setNewRating} renderNewReview = {renderNewReview}/>
            <br></br>
            Previous Tenant Reviews
            {reviewRender}
        </div>
    )
}

export default Review; 