import { Link } from "react-router-dom";
import { Card, Icon, Image } from 'semantic-ui-react'
function AppliedListing({appliedListing}){
   // console.log(appliedListing)
    
    // console.log(appliedListing.created_at.getDate())
  
    return(
        <Card style={{padding: "20px"}}>
            <Link to =  {`/apartment/${appliedListing.listing.id}`}>

            <Image src= {JSON.parse(appliedListing.listing.photos)[0]} alt = {appliedListing.listing.address}/> 
            </Link>
            <Card.Content>
                Price:${appliedListing.listing.price}
            <Link to =  {`/apartment/${appliedListing.listing.id}`}>
            <p>View this place</p>
           </Link>
           <Card.Description>
          Address:{appliedListing.listing.address}, {appliedListing.listing.city}, {appliedListing.listing.state}, {appliedListing.listing.zip_code}
         
          </Card.Description>
            </Card.Content>
    
          {/* <img  alt = {appliedListing.listing.address} src = {JSON.parse(appliedListing.listing.photos)[0]}/> */}
        </Card>
    )
}
export default AppliedListing;