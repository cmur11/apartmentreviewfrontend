import  {useState} from "react"
import ReviewCard from "./ReviewCard"
import ReviewForm from "./ReviewForm"

function Review({listing,setListing, user }){
    const [newReview, setNewReview] = useState("")
    const [newRating, setNewRating] = useState("")

   function handleUpdatedReview(review){

        console.log(listing.reviews)
        
            const updatedListingWithReview = listing.reviews.map((listingReview)=> 
            listingReview.id === review.id ? review: listingReview );

            const updatedListing = {
                ...listing,
                reviews: updatedListingWithReview
            }
            // console.log(updatedListingWithReview)
            setListing(updatedListing)
    }
    // console.log(listing)
 
    const reviewRender = listing.reviews.map((review) =>{
        return(
        <ReviewCard review = {review} key = {review.id} user = {user} handleUpdatedReview = {handleUpdatedReview}/>
    )
    }
    )

//    used to render review form
    function renderNewReview(newReview){
        setListing({...listing,reviews:[...listing.reviews,newReview]})
    }
    
    return(
        <div>
            {/* <br>
            </br> */}
            <ReviewForm user = {user} listing = {listing} newReview = {newReview} setNewReview = {setNewReview} newRating = {newRating} setNewRating = {setNewRating} renderNewReview = {renderNewReview}/>
            <br></br>
            <h3 className = "prevtenant">Previous Tenant Reviews</h3>
            <div>

            {reviewRender}
            </div>
        </div>
    )
}

export default Review; 