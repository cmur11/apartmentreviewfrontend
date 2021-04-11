import {useState} from "react"
import { Button, Form } from 'semantic-ui-react'


function ReviewForm({renderNewReview,listing,newReview, setNewReview, newRating,setNewRating, user}){
     const [showReview,setShowReview] = useState(false)
        // console.log(user)
    function handleSubmit(e){
        setShowReview(false)
        e.preventDefault()
        const options = [
            { key: '1', text: '1', value: '1' },
            { key: '2', text: '2', value: '2' },
            { key: '3', text: '3', value: '3' },
            { key: '4', text: '4', value: '4' },
            { key: '5', text: '5', value: '5' }
        ]

        fetch('https://lit-brushlands-74782.herokuapp.com/reviews', {
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
        <>
        
       <Button onClick = {(e) => setShowReview(true)}>Leave a review</Button>
       <br></br>
       {showReview ? 
       
        // <div className = "reviewForm" >
             <Form onSubmit = {(e) => handleSubmit(e)}className = "addReview" >

           {/* <div style="text-align:center"> */}

            <Form.Input 
            className = "formInputReview"
                // style="text-align:center"
                style={{width: "25%"}}
                value = {newReview}
                type = "text"
                placeholder = "Leave your review here!"
                onChange = {(e) => setNewReview(e.target.value)}/>
           {/* </div> */}
                
            
        <select onChange = {(e) => setNewRating(e.target.value)} class = "rating">
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
            <option value = "4">4</option>
            <option value = "5">5</option> 
         </select>
        
       
    <Form.Button >Submit</Form.Button>
            <br></br>
             </Form>
        // </div> 
        :
        null
    }
        </>
    )
}
export default ReviewForm;