import react, {useState} from "react"
// import { Card, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";
// import { BrowserRouter as  Link} from "react-router-dom";
// import OneListing from "./OneListing"

function ListingCards({listing, user, oneApartment}){
    // console.log(listing
    const [chosenApartment , setChosenApartment] = useState([])
    const [sum, setSum] = useState()
    // console.log(user)
    // function handleRender(listing){
    //      return(
          const arrayOfReviews = listing.reviews.map((review) => review.rating)
          console.log(arrayOfReviews)
          const length = arrayOfReviews.length

        //   const sum = arrayOfReviews.reduce((a,b) => (a+ b))
          console.log(length)
   
    //       <div> 
    //           <OneListing listing = {listing} key = {listing.id}/>  
    //           </div>

    //     )
    // }
    
    function handleClick(listing){
    //   console.log(listing)
        setChosenApartment(true)
        // handleRender(listing)
        // return(
           
        //   <OneListing listing = {listing} key = {listing.id}/>  

        // )
    }
      
   
    {/* {chosenApartment ?      */}
    {/* {handleRender}  : */}
    return(
        
   

    
        (<div  className = "listing"> 
              <Link to =  {`/apartment/${listing.id}`}>
                <p>View this place</p>
               </Link>

              <h4>Address:{listing.address}, {listing.city}, {listing.state}, {listing.zip_code}</h4>
              <h5>${listing.price}</h5>
              <p>Bedrooms:{listing.bedrooms}</p>
              <p>Bathrooms:{listing.bedrooms}</p>
              <p>Sqft:{listing.sqft}</p>
              <p>Neighborhood: {listing.neighborhood}</p>
              <img onClick = {(e) => handleClick(listing)} alt = {listing.address} src = {listing.photos}/>
              
        </div>)

        


            )

    
            
           
      
   
}
export default ListingCards