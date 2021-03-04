import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import react, {useState,useEffect} from "react"
import Review from "./Review"
import EmailForm from "./EmailForm"
import Modal from 'react-modal';

function OneListing({user}){
    const {id} = useParams()
    // const {listing} = useParams()
    // console.log(listing)
    const [listing, setListing] = useState({reviews: []})
    // const [reviews, setReviews] = useState([])
    const [saved, setSaved] = useState(false)
    const [applied, setApplied] = useState()
    const [textBox, setTextBox] = useState(false)

    // console.log(applied)
    // // console.log(listing.applied_listings[0])

    function checkApplied(){
        // debugger
        if (listing.applied_listings  && applied === false){
            setApplied(true)
        }
    }
    
    // const [button, setButton] = ("Save to your Listing")
    useEffect(()=> {
        fetch(`http://localhost:3000/listings/${id}`)
        .then(res => res.json())
        .then((listing) => {setListing(listing)})
        
    }, [])
    
    const reviewForListing = <Review listing = {listing} setListing = {setListing} key ={listing.id} user = {user} />
    
    //    console.log(listing)
    
    // console.log(user)
    
    function handleSave(e){
        //   setButton("Already saved!")
        //    setSaved(true)
        if (saved === true){
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
                    user_id: 1,
                    price: listing.price,
                    
                }),
            })
            .then(response => response.json())
            .then(newSavedListing => {
                console.log(newSavedListing);
            })
            
            
        }
        
        
    }
    
    function handleApply(e){
        
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
    
    
    console.log(listing)
    
    //    const photos = JSON.parse(listing.photos)[0]
    //    console.log(photos)
    
    return(
       
<>
    
        <div  className = "onelisting">
            <h4 >Address:{listing.address}, {listing.city}, {listing.state}, {listing.zip_code}</h4>
            <h5>${listing.price}</h5>
            <p>Bedrooms:{listing.bedrooms}</p>
            <p>Bathrooms:{listing.bedrooms}</p>
            <p>Sqft:{listing.sqft}</p>
            <p>Neighborhood: {listing.neighborhood}</p>
            <img  alt = {listing.address} src = {listing.photos}/>
    </div>
    <div className = "saveforLaterButton"onClick = {(e) => {handleSave()}}>
        {saved ? <button>Listing Saved</button> : <button>Save Listing</button>}
        {/* <button>Save Listing</button> */}
    </div>
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
}

export default OneListing;