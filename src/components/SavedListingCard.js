import { Link } from "react-router-dom";
import { Card, Icon, Image, Button } from 'semantic-ui-react'
// import { Card, Icon, Image, Button,Rating, Container } from 'semantic-ui-react'
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

        <Card style={{padding: "20px"}}>
        <Link to =  {`/apartment/${saved_listing.listing.id}`}>
        <Image src= {JSON.parse(saved_listing.listing.photos)[0]} alt = {saved_listing.listing.address} wrapped ui={true} />
         </Link>
         <Card.Content>

         <Card.Header>
        <h7> Current price: ${saved_listing.listing.price} </h7>
         </Card.Header>
         <Card.Meta>
         Price Change: ${change}
         <br></br>
        {saved_listing.listing.address}, {saved_listing.listing.city}, {saved_listing.listing.state}, {saved_listing.listing.zip_code}
         </Card.Meta>
        {/* <div className = "priceUp">Price Change: ${change}</div> */}
        {/* <h5>Current price: ${saved_listing.listing.price}</h5> */}
        {/* <h5>Price at Saving: ${oldPrice}</h5> */}
        <Card.Description>

        <p>Bedrooms:{saved_listing.listing.bedrooms}</p>
        <p>Bathrooms:{saved_listing.listing.bedrooms}</p>
        <p>Sqft:{saved_listing.listing.sqft}</p>
        <p>Neighborhood: {saved_listing.listing.neighborhood}</p>
        </Card.Description>
        
        <br></br>
        <br></br>
        <Button onClick = {(e) => {removeListing()}}>Remove Listing</Button>
         </Card.Content>
        </Card>
    )
}
export default SavedListingCard;