import react, {useState} from "react"
function ReviewForm({listing}){
        const [newReview, setNewReview] = useState("")
        const [newRating, setNewRating] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        console.log(newReview, newRating)
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
        .then(data => {
        console.log('Success:', data);
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
        <select onChange = {(e) => setNewRating(e.target.value)} class = "Bathrooms">
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