import { Link } from "react-router-dom";
function SavedListingCard({saved_listing, oldPrice, removeFromRender}){
    // console.log(listing)
    const change = (oldPrice - saved_listing.listing.price)
    // const listing = (saved_listing.isting)
    function removeListing(){
        // console.log(saved_listing)
        const listingToDelete = saved_listing

    fetch(`http://localhost:3000/saved_listings/${saved_listing.id}`,{
    method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => removeFromRender(listingToDelete))
    }

    return(
        <div  className = "listing"> 
        <Link to =  {`/apartment/${saved_listing.listing.id}`}>
          <p>View this place</p>
         </Link>
        <div className = "priceUp">Price Change: ${change}</div>
        <h4>Address:{saved_listing.listing.address}, {saved_listing.listing.city}, {saved_listing.listing.state}, {saved_listing.listing.zip_code}</h4>
        <h5>Current price: ${saved_listing.listing.price}</h5>
        <h5>Price at Saving: ${oldPrice}</h5>
        <p>Bedrooms:{saved_listing.listing.bedrooms}</p>
        <p>Bathrooms:{saved_listing.listing.bedrooms}</p>
        <p>Sqft:{saved_listing.listing.sqft}</p>
        <p>Neighborhood: {saved_listing.listing.neighborhood}</p>
        <img alt = {saved_listing.listing.address} src = {JSON.parse(saved_listing.listing.photos)[0]}/>
        <br></br>
        <br></br>
        <button onClick = {(e) => {removeListing()}}>Remove Listing</button>
        </div>
    )
}
export default SavedListingCard;