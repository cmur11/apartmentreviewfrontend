import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import react, {useState,useEffect} from "react"
import Review from "./Review"

function OneListing(){
    const {id} = useParams()
    // const {listing} = useParams()
    // console.log(listing)
    const [listing, setListing] = useState({reviews: []})
    useEffect(()=> {
        fetch(`http://localhost:3000/listings/${id}`)
        .then(res => res.json())
        .then((listing) => setListing(listing))
       }, [])

      const reviewForListing = <Review listing = {listing}/>
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
    <div>
       {reviewForListing}
    </div>
    </>
    )
}

export default OneListing;