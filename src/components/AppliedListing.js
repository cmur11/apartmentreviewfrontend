import { Link } from "react-router-dom";
function AppliedListing({appliedListing}){
    console.log(appliedListing)
    
    // console.log(appliedListing.created_at.getDate())
  
    return(
        <div>

            <Link to =  {`/apartment/${appliedListing.listing.id}`}>
            <p>View this place</p>
           </Link>
    
          <h4>Address:{appliedListing.listing.address}, {appliedListing.listing.city}, {appliedListing.listing.state}, {appliedListing.listing.zip_code}</h4>
          <h5>Price:${appliedListing.listing.price}</h5>
          <img  alt = {appliedListing.listing.address} src = {JSON.parse(appliedListing.listing.photos)[0]}/>
        </div>
    )
}
export default AppliedListing;