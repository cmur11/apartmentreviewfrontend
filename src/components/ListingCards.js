import react, {useState} from "react"
// import { Card, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";
// import { BrowserRouter as  Link} from "react-router-dom";
// import OneListing from "./OneListing"

function ListingCards({listing, user, oneApartment}){
    // console.log(listing
    const [chosenApartment , setChosenApartment] = useState([])
    const [sum, setSum] = useState()
    const [average, setAverage] = useState(listing.average)
 

    // console.log(user)
    // function handleRender(listing){
    //      return(
        //   const arrayOfReviews = listing.reviews.filter((review) => review.rating > 1)
        //  console.log(listing.reviews)
        //   const length = arrayOfReviews.length
        getAverage()
   function getAverage(){
       if (listing.reviews.length > 1){
        //    console.log(listing.reviews)
        const arrayOfReviews = listing.reviews.map((review) => review.rating )
        // console.log(arrayOfReviews)
        // console.log(arrayOfReviews,arrayOfReviews.length)
        // setAverage(arrayOfReviews.reduce((a, b) => a + b, 0) / arrayOfReviews.length)
        // console.log(average)
       }
   }
    
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
    console.log(JSON.parse(listing.photos)[0])
    console.log(JSON.parse(listing.photos))
    // console.log(listing.photos.split('[')[1])
    // console.log(listing.applied_listings)
    return(
        
   

    
        (<div  className = "listing"> 
              <Link to =  {`/apartment/${listing.id}`}>
                <p>View this place</p>
               </Link>
               <h4>Average Rating: {average}</h4> 
              <h4>Address:{listing.address}, {listing.city}, {listing.state}, {listing.zip_code}</h4>
              <h5>Price:${listing.price}</h5>
              <p>Bedrooms:{listing.bedrooms}</p>
              <p>Bathrooms:{listing.bedrooms}</p>
              <p>Sqft:{listing.sqft}</p>
              <p>Neighborhood: {listing.neighborhood}</p>
              <img onClick = {(e) => handleClick(listing)} alt = {listing.address} src = {JSON.parse(listing.photos)[0]}/>
              
        </div>)

        


            )

    
            
           
      
   
}
export default ListingCards