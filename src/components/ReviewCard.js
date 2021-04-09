import  {useState} from "react"
import { Button, Form } from 'semantic-ui-react'
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
        if (user.id === review.user_id && checked === false){
            setUserId(true)
            setChecked(true)
        }
    }

    //console.log(user.id, review.listing_id)

    function handleUpdate(e){
        e.preventDefault()
       // console.log(reviewContent,reviewRating)

        fetch(`https://lit-brushlands-74782.herokuapp.com/reviews/${review.id}`, {
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
 
        // console.log(user)
    
   

return( <>
<div>
    <h5>User: {user.username}</h5>
    <h5>Review: {review.comment}</h5>
    <h5>Rating: {review.rating}</h5>
   
    <div className = "reviewButton" onClick = {(e) => setUpdate(!update)}>
        {userId ? <Button>Update Review </Button> : null }
    </div>
    
    <div className = "updateContent" >
        {update ? 
            <div className = "reviewForm">
                <Form onSubmit = {(e) => handleUpdate(e)}className = "updateReview">
                <Form.Input 
                    value = {reviewContent}
                    type = "text"
                    placeholder = {reviewContent}
                    onChange = {(e) => setReviewContent(e.target.value)}/>
                   
                    <label className = "ratingLabel">Rating:  </label>
                        <select onChange = {(e) => setReviewRating(e.target.value)} class = "changeRating">
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                        </select>
                    <input value = "Update your review!" type = "submit"/> 
                </Form>
            </div>
        
    
        : null}
    </div>

</div>
    </>
)
}
export default ReviewCard;

{/* <div class="ui compact menu">
<div class="ui simple dropdown item">
  Dropdown
  <i class="dropdown icon"></i>
  <div class="menu">
    <div class="item">Choice 1</div>
    <div class="item">Choice 2</div>
    <div class="item">Choice 3</div>
  </div>
</div>
</div> */}
