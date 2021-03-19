// import {useState} from "react"
import { Link } from "react-router-dom";
import { Card, Icon, Image } from 'semantic-ui-react'


function ListingCards({listing, user, oneApartment}){
    // console.log(listing
    // const [chosenApartment , setChosenApartment] = useState([])
    // const [sum, setSum] = useState()
 
     
   function getAverage(){

    let findListing = listing.reviews.find(listingJoin => listingJoin.listing_id === listing.id)
       if (!!findListing){
        const arrayOfReviews = listing.reviews.map((review) => review.rating )
       let average = (arrayOfReviews.reduce((a, b) => a + b, 0) / arrayOfReviews.length)
           
            return  Math.round(average * 100)/100
       }else{
        let average = "No ratings provided"
           return average
       }

   }
    
    function handleClick(listing){
        // setChosenApartment(true)
    }
      
    
   
    return(
     

        <div className="listing-card">
            
        <Card style= {{marginRight:"15px", marginBottom:"15px"}}>
        
              <Card.Content>
         <Link to =  {`/apartment/${listing.id}`}>
            <Image height='150' width='180' src= {(listing.photos)[0]} onClick = {(e) => handleClick(listing)} alt = {listing.address} wrapped ui={false} />
            
               <Card.Header>Price ${listing.price} <br></br>
                            {listing.neighborhood}
               </Card.Header>
             
              <Card.Meta>
             <span className='address'>{listing.address}, {listing.city}, {listing.state}, {listing.zip_code}</span>
             </Card.Meta>
             </Link>
              
              <Card.Description>

              Bedrooms:{listing.bedrooms}<br></br>
              Bathrooms:{listing.bedrooms}
              <p>Sqft:{listing.sqft} ft</p>
              </Card.Description>
             
              
              <Card.Content extra>
      <a>
        <Icon name='star' />
        {listing.reviews ? getAverage() : "No Ratings"}
      </a>
    </Card.Content>
     
    </Card.Content>
        </Card>
        </div>
       

            )

      
   
}
export default ListingCards