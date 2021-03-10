import react, {useState} from "react"
// import { Card, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { Card, Icon, Image,Container } from 'semantic-ui-react'
// import { BrowserRouter as  Link} from "react-router-dom";
// import OneListing from "./OneListing"

function ListingCards({listing, user, oneApartment}){
    // console.log(listing
    const [chosenApartment , setChosenApartment] = useState([])
    const [sum, setSum] = useState()
    // const [average, setAverage] = useState("No Reviews")
 

    // console.log(user)
    // function handleRender(listing){
    //      return(
        //   const arrayOfReviews = listing.reviews.filter((review) => review.rating > 1)
        //  console.log(listing.reviews)
        //   const length = arrayOfReviews.length
        // console.log(listing.reviews)
     
   function getAverage(){

    let findListing = listing.reviews.find(listingJoin => listingJoin.listing_id === listing.id)
       if (!!findListing){
        //    console.log(listing.reviews)
        const arrayOfReviews = listing.reviews.map((review) => review.rating )
        // console.log(arrayOfReviews)
        // console.log(arrayOfReviews,arrayOfReviews.length)
       let average = (arrayOfReviews.reduce((a, b) => a + b, 0) / arrayOfReviews.length)
        // setAverage(average)
        // console.log(average)
            return average
        // console.log(average)
       }else{
           let average = "No ratings provided"
           return average
       }

    //    console.log('hi')
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
    // console.log(listing.photos)
    // console.log(JSON.parse(listing.photos)[0])
    // console.log(JSON.parse(listing.photos))
    // console.log(listing.photos.split('[')[1])
    // console.log(listing.applied_listings)
    return(
        // <Container>

        <div className="listing-card">
            
        <Card >
        
              <Card.Content>
         <Link to =  {`/apartment/${listing.id}`}>
            <Image height='150' width='180' src= {JSON.parse(listing.photos)[0]} onClick = {(e) => handleClick(listing)} alt = {listing.address} wrapped ui={false} />
              {/* </Link>  */}
              
               {/* <h4>Average Rating:{listing.reviews ? getAverage() : "No Ratings"} </h4>  */}
               {/* <Link to =  {`/apartment/${listing.id}`}> */}
               <Card.Header>Price ${listing.price} <br></br>
                            {listing.neighborhood}
               </Card.Header>
              {/* <h4>Address:{listing.address}, {listing.city}, {listing.state}, {listing.zip_code}</h4> */}
              {/* </Link> */}
              {/* <Link to =  {`/apartment/${listing.id}`}> */}
              <Card.Meta>
             <span className='address'>{listing.address}, {listing.city}, {listing.state}, {listing.zip_code}</span>
             </Card.Meta>
             </Link>
              
              <Card.Description>

              Bedrooms:{listing.bedrooms}<br></br>
              Bathrooms:{listing.bedrooms}
              <p>Sqft:{listing.sqft} ft</p>
              </Card.Description>
             
              
              {/* <Card.Content extra>
      <a>
        <Icon name='star' />
        {listing.reviews ? getAverage() : "No Ratings"}
      </a>
    </Card.Content> */}
     
    </Card.Content>
        </Card>
        </div>
        // </Container>



            )

    
            
           
      
   
}
export default ListingCards