import react, {useState, useEffect} from "react"
import ListingNeighborhoods from "./ListingNeighborhoods"
import ListingCards from "./ListingCards"
import Filter from "./Filter"

function ListingContainer(){
    const [user,setUser] = useState([])
    const [listings,setListings] = useState([])
    //  console.log(user)
     
     
     useEffect(()=> {
     fetch('http://localhost:3000/users')
     .then(res => res.json())
     .then((users) => setUser(users[0]))
    }, [])

    useEffect(()=> {
        fetch('http://localhost:3000/listings')
        .then(res => res.json())
        .then((listings) => setListings(listings))
       }, [])
// console.log(listings)
// console.log(listing.user)
// console.log(user)
       const listedApartments = listings.map((listing) => {
           return(
               <ListingCards listing = {listing} key = {listing.id} user = {user}/>
           )
       })
    //    listings.uniq(&:neighborhood)
       const listingNeighborhoods = listings.map((listing) => {
           return( listing.neighborhood)
       })
      const distinctNeighborhoods = [...new Set(listingNeighborhoods)]
    //   console.log(listingNeighborhoods)
    //    console.log(distinctNeighborhoods)

       const NeighborhoodList = listingNeighborhoods.map((neighborhood) =>{
           return(
               <ListingNeighborhoods neighborhood = {neighborhood} />
           )
       })
       function filterSearch({price,bedrooms,bathrooms,neighborhoods}){
           console.log(price)
           console.log(bedrooms)
           console.log(bathrooms)
           console.log(neighborhoods)
       }

    return(
        <div>
            <h1>Welcome {user.username}</h1>
            <Filter filterSearch = {filterSearch} distinctNeighborhoods = {distinctNeighborhoods}/>
       {listedApartments}
       {NeighborhoodList}
       </div>
    )
}
export default ListingContainer;