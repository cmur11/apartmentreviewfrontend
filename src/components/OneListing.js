import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import react, {useState,useEffect} from "react"
import Review from "./Review"
import EmailForm from "./EmailForm"
import PhotoCard from "./PhotoCard"
import Modal from 'react-modal';

function OneListing({user}){
    const {id} = useParams()
    // const {listing} = useParams()
    // console.log(listing)
    const [listing, setListing] = useState(null)
    // const [reviews, setReviews] = useState([])
    const [saved, setSaved] = useState(false)
    const [applied, setApplied] = useState(false)
    const [textBox, setTextBox] = useState(false)
    // const [photos,setPhotos] = useState([]) 

    // console.log(JSON.parse(listing.photos))

  

        let image 
        if (listing)
            { image = JSON.parse(listing.photos).map((photo) => {

                return(  <PhotoCard photo = {photo}/>)
            } )
            let test = listing.photos
            let arr = Array.from(test)
            console.log(arr)
            }
   
//    debugger
    function helper(listing){
        setListing(listing)
        // setSaved(listing.saved)
    }

    function validate( ){
        if (listing.applied_listings && saved == false) {
            setSaved(true)
        }

    }
    
    useEffect(()=> {
        fetch(`http://localhost:3000/listings/${id}`)
        .then(res => res.json())
        .then((listing) => {helper(listing)})
        
    }, [])
    
    let reviewForListing 
    
        if (listing) {
            reviewForListing = <Review listing = {listing} setListing = {setListing} key ={listing.id} user = {user} />
        }

    
    function handleSave(e){
        //   setButton("Already saved!")
        //    setSaved(true)
        if (listing.saved_listings.includes(listing)){
            alert("You've already saved this listing!")
        } else{
            setSaved(true)
            fetch('http://localhost:3000/saved_listings', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    listing_id: listing.id,
                    user_id: user.id,
                    price: listing.price,
                    
                }),
            })
            .then(response => response.json())
            .then(newSavedListing => {
                console.log(newSavedListing);
            })
            // console.log(listing.id)
            fetch(`http://localhost:3000/listings/${listing.id}`, {
                method: 'PATCH', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    saved: true
                
                }),
            })
            .then(response => response.json())
            .then(res => {
            console.log(res);
            })

        }
        
        
    }
  
    
    function handleApply(e){
        //console.log(user)
        if(applied === true ){
            alert( "You've already applied to this listing!")
        }else {
            setApplied(true)
            fetch('http://localhost:3000/applied_listings', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    listing_id: listing.id,
                    user_id: 1,
                    
                }),
            })
            .then(response => response.json())
            .then(newAppliedListing => {
                console.log(newAppliedListing);
            })
        }
        setTextBox(true)
    }
    
    function handleAlreadySaved(){
        console.log('hi')
    }
    
    
    //    const photos = JSON.parse(listing.photos)[0]
    //    console.log(photos)
  
    // if (listing.saved_listings.find(savedListing => savedListing.user_id === user.id)){
    //     setSaved(true)
    // }

    if (listing) {

        return( 
           
    <>
        {image}
            <div  className = "onelisting">
                <h4 >Address:{listing.address}, {listing.city}, {listing.state}, {listing.zip_code}</h4>
                <h5>${listing.price}</h5>
                <p>Bedrooms:{listing.bedrooms}</p>
                <p>Bathrooms:{listing.bedrooms}</p>
                <p>Sqft:{listing.sqft}</p>
                <p>Neighborhood: {listing.neighborhood}</p>
                <img  alt = {listing.address} src = {JSON.parse(listing.photos)}/>
        </div>
        {listing.saved_listings.find(savedListing => savedListing.user_id === user.id) ? 
        <div className = "saveforLaterButton"onClick = {(e) => {handleSave(e)}}>  
            <button>Listing Saved</button>
        </div>
        :
        <div className = "saveforLaterButton"onClick = {(e) => {handleAlreadySaved(e)}}> 
         <button>Save Listing</button> 
         </div> }

        <br></br>
        <div className = "applyToListing" onClick = {(e) => {handleApply()}}>
            <button>{applied ? "Broker contacted" : "Apply to Listing"}</button>
            {/* <button onClick = {(e) => {handleApply()}}>Apply To Listing</button> */}
        </div>
    
        {textBox ? 
        <div className = "renderApplyBox">
          
        <EmailForm listing = {listing} setTextBox = {setTextBox} /> 
        </div> 
        : null }
       
    
        <div>
           {reviewForListing}
        </div>
        {/* <div>
            <EmailForm listing = {listing} />
        </div> */}
        </>
        )
    } else {
        return <div>Loading</div>
    }
}

export default OneListing;