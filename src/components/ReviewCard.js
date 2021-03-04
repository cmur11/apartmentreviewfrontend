import react, {useState, useEffect} from "react"

function ReviewCard ({review, user, handleUpdatedReview}){
    const [userId, setUserId] = useState(false)
    const [checked,setChecked] = useState(false)
    const [update,setUpdate] = useState(false)
    

    const [reviewContent, setReviewContent] = useState(review.comment)
    const [reviewRating, setReviewRating] = useState(review.rating)

   


    // console.log(userId, checked)
    // console.log(review.user_id)
    validate()
    function validate(){
        if (user.id == review.user_id && checked === false){
            setUserId(true)
            setChecked(true)
        }
    }

    //console.log(user.id, review.listing_id)

    function handleUpdate(e){
        e.preventDefault()
       // console.log(reviewContent,reviewRating)

        fetch(`http://localhost:3000/reviews/${review.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: user.id,
                listing_id: review.listing_id,
                comment: reviewContent,
                rating: reviewRating,
            }),
            })
            .then(response => response.json())
            .then(review => {
            handleUpdatedReview(review);
        })

        setUpdate(false)

    }
    // console.log(update)

return( <>
<div>

    <h5>Review: {review.comment}</h5>
    <h5>Rating: {review.rating}</h5>
    {/* <button></button> */}
    <div className = "reviewButton" onClick = {(e) => setUpdate(!update)}>
    {userId ? <button>Update Review</button> : null }
    </div>
    <div className = "updateContent" >
    {update ? 
            <div className = "reviewForm">
            <form onSubmit = {(e) => handleUpdate(e)}className = "updateReview">
                <input 
                value = {reviewContent}
                type = "text"
                placeholder = {reviewContent}
                onChange = {(e) => setReviewContent(e.target.value)}>
                </input>
                <label className = "ratingLabel">Rating:  </label>
        <select onChange = {(e) => setReviewRating(e.target.value)} class = "changeRating">
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
            <option value = "4">4</option>
            <option value = "5">5</option>
        </select>
        <input value = "Update your review!" type = "submit"/> 
            </form>
            </div>
        
    
    : null}
    </div>

</div>
    </>
)
}
export default ReviewCard;