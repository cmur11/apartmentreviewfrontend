import react, {useState} from "react"
// import { Card, Icon } from 'semantic-ui-react'

function ListingCards({listing, user}){
    console.log(listing)
    // console.log(user)
    return(
        <>
        <div className = "listing">
            <h4>Address:{listing.address}, {listing.city}, {listing.state}, {listing.zip_code}</h4>
            <h5>${listing.price}</h5>
            <p>Bedrooms:{listing.bedrooms}</p>
            <p>Bathrooms:{listing.bedrooms}</p>
            <p>Sqft:{listing.sqft}</p>
            <img src = {listing.photos}/>
        </div>
        </>
    )
}
export default ListingCards