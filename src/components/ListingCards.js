import react, {useState} from "react"
// import { Card, Icon } from 'semantic-ui-react'

function ListingCards({listing, user}){
    console.log(listing)
    console.log(user)
    return(
        <div className = "listing">
            <h4>${listing.price}</h4>
            <p>Bedrooms:{listing.bedrooms}</p>
            <p>Bathrooms:{listing.bedrooms}</p>
            <p>Sqft:{listing.sqft}</p>
            <h2>{listing.address}</h2>
            <img src = {listing.photos}/>
            
        </div>
    )
}
export default ListingCards