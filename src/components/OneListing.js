import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import react, {useState,useEffect} from "react"
import Review from "./Review"
import EmailForm from "./EmailForm"
import PhotoCard from "./PhotoCard"
import Modal from 'react-modal';
import { Card, Icon, Image } from 'semantic-ui-react'

function OneListing({user}){
    const {id} = useParams()
    // const {listing} = useParams()
    // console.log(listing)
    const [listing, setListing] = useState(null)
    const [listingPhotos, setListingPhotos] = useState([])
    // const [reviews, setReviews] = useState([])
    const [saved, setSaved] = useState(false)
    const [applied, setApplied] = useState(false)
    const [textBox, setTextBox] = useState(false)
    // const [photos,setPhotos] = useState([]) 

    
// let imageArr = JSON.parse(listing.photos)


    
    function getPhotos(){

            return listingPhotos.map((photo) => {
    
                return <PhotoCard photo = {photo} listing = {listing} listingPhotos = {listingPhotos} setListingPhotos = {setListingPhotos}/>
            })
     
    }

  

    function helper(listing){
        let imageArr = JSON.parse(listing.photos)
        
        console.log("LISY", listing);
        // Logic could cause issues keep an eye on it based on whenState iss et for listing and findinglisting
        let findListing = listing.applied_listings.find(listingJoin => listingJoin.listing_id === listing.id)

        let findSaved = listing.saved_listings.find(savedListing => savedListing.listing_id === listing.id)

        console.log("FOUND LIST", findListing);
        console.log("save list", findSaved)

        setListing(listing)
        setListingPhotos(imageArr)
        setApplied(!!findListing)
        setSaved(!!findSaved)
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
                    user_id: user.id,
                    price: listing.price,
                    
                }),
            })
            .then(response => response.json())
            .then(newSavedListing => {
                console.log(newSavedListing);
            })
            
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
            setTextBox(true)
            setApplied(true)
            // setSaved(false)
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
        // setTextBox(true)
    }
    
    function handleAlreadySaved(){
        console.log('hi')
    }
    
    
  










    if (listing) {
       
        return( 
           
    <>
    <div>
        {getPhotos()}
    </div>

    <Card style={{padding: "20px"}}>
                 <Card.Header>Price ${listing.price} <br></br>
                            {listing.neighborhood}
               </Card.Header>
               <Card.Meta>
             <span className='address'>{listing.address}, {listing.city}, {listing.state}, {listing.zip_code}</span>
             </Card.Meta>

                {/* <h4 >Address:{listing.address}, {listing.city}, {listing.state}, {listing.zip_code}</h4> */}
                <Card.Description>
                <p>Bedrooms:{listing.bedrooms}</p>
                <p>Bathrooms:{listing.bedrooms}</p>
                <p>Sqft:{listing.sqft}</p>
                
                </Card.Description>
                {/* <img  alt = {listing.address} src = {JSON.parse(listing.photos)}/> */}
            
        
        <div className = "saveforLaterButton"onClick = {(e) => {handleSave(e)}}>  
            <button>{saved ? "Already Saved" : "Save Listing"}</button>
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
       
       </Card>
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