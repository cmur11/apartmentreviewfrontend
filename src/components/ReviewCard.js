function ReviewCard ({review}){
    // console.log(review)
return( <>
    <h5>Review: {review.comment}</h5>
    <h5>Rating: {review.rating}</h5>
    </>
)
}
export default ReviewCard;