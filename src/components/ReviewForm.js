import react, {useState} from "react"
function ReviewForm({renderNewReview,listing,newReview, setNewReview, newRating,setNewRating, user}){
     
        // console.log(user)
    function handleSubmit(e){
        e.preventDefault()
        
        fetch('http://localhost:3000/reviews', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
            user_id: 1,
            listing_id: listing.id,
            comment: newReview,
            rating: newRating,
        }),
        })
        .then(response => response.json())
        .then(newReview => {
       renderNewReview(newReview);
        })

    }
    return(
        <div className = "reviewForm">
            <form onSubmit = {(e) => handleSubmit(e)}className = "addReview">
                <input 
                value = {newReview}
                type = "text"
                placeholder = "Leave your review here!"
                onChange = {(e) => setNewReview(e.target.value)}>
                </input>
                <label className = "ratingLabel">Rating:  </label>
        <select onChange = {(e) => setNewRating(e.target.value)} class = "rating">
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
            <option value = "4">4</option>
            <option value = "5">5</option>
        </select>
        <input value = "Leave your review!" type = "submit"/> 
            </form>
        </div>
    )
}
export default ReviewForm;