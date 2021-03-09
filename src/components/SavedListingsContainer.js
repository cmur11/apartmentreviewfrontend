import react, {useState,useEffect} from "react"
import SavedListingCard from "./SavedListingCard"
import { Card, Icon, Image,Container } from 'semantic-ui-react'

function SavedListingsContainer(){

    const [savedListings,setSavedListings] = useState([])
    useEffect(()=> {
        fetch('http://localhost:3000/saved_listings')
        .then(res => res.json())
        .then((listings) => setSavedListings(listings))
       }, [])

     function removeFromRender(listingToDelete){
        setSavedListings(savedListings.filter(savedListings => savedListings.id !== listingToDelete.id))
     }  
// console.log(savedListings)
const listArray = savedListings.map((saved_listing)=> {
  return(  <SavedListingCard saved_listing = {saved_listing} oldPrice = {saved_listing.price} key = {saved_listing.id} removeFromRender = {removeFromRender}/>)
})
// console.log(listArray)
    return(
      <Container textAlign='center'>

        <div>
           {listArray}
        </div>
      </Container>
    )

}

export default SavedListingsContainer;