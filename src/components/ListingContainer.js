import react, {useState, useEffect} from "react"
import ListingCards from "./ListingCards"

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

    return(
        <div>
            <h1>Welcome {user.username}</h1>
       {listedApartments}
       </div>
    )
}
export default ListingContainer;