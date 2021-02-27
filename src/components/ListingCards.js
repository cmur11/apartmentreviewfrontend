import react, {useState} from "react"
// import { Card, Icon } from 'semantic-ui-react'
import OneListing from "./OneListing"

function ListingCards({listing, user}){
    // console.log(listing)
    const [oneListing, setOneListing] = useState([])
    // console.log(user)
    
    console.log(oneListing)
    
    return(
        <>
        {/* {oneListing} ? <OneListing/> : */}
        <div  className = "listing">
            <h4 onClick = {(e) => setOneListing(listing)}>Address:{listing.address}, {listing.city}, {listing.state}, {listing.zip_code}</h4>
            <h5>${listing.price}</h5>
            <p>Bedrooms:{listing.bedrooms}</p>
            <p>Bathrooms:{listing.bedrooms}</p>
            <p>Sqft:{listing.sqft}</p>
            <p>Neighborhood: {listing.neighborhood}</p>
            <img onClick = {(e) => setOneListing(listing)} alt = {listing.address} src = {listing.photos}/>
        </div>
        </>
    )
}
export default ListingCards