import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import react, {useState,useEffect} from "react"
import Review from "./Review"

function OneListing(){
    const {id} = useParams()
    // const {listing} = useParams()
    // console.log(listing)
    const [listing, setListing] = useState({reviews: []})
    const [saved, setSaved] = useState(false)
    const [button, setButton] = ("Save to your Listing")

    useEffect(()=> {
        fetch(`http://localhost:3000/listings/${id}`)
        .then(res => res.json())
        .then((listing) => setListing(listing))
       }, [])

      const reviewForListing = <Review listing = {listing} setListing = {setListing} key ={listing.id}/>


       function handleSave(e){
        //   setButton("Already saved!")
        //    setSaved(true)
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
    <div className = "saveforLaterButton">
        <button onClick = {(e) => {handleSave()}}>Save Listing</button>
    </div>
    <br></br>
    <div className = "applyToListing">
        <button>Apply To Listing</button>
    </div>
    <div>
       {reviewForListing}
    </div>
    </>
    )
}

export default OneListing;