import react, {useState, useEffect} from "react"
import ListingNeighborhoods from "./ListingNeighborhoods"
import ListingCards from "./ListingCards"
import Filter from "./Filter"
import OneListing from "./OneListing"

function ListingContainer({city, setCity,oneApartment}){
    const [user,setUser] = useState([])
    const [listings,setListings] = useState([])
    const [bathroomFilter, setBathroomFilter] = useState(0)
    const [bedroomFilter, setBedroomFilter] = useState(0)
    const [priceFilter, setPriceFilter] = useState(1000000)
    const [neighborhoodFilter, setNeighborhoodFilter] = useState([])

  
     console.log(bathroomFilter,bedroomFilter,priceFilter)
     
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

       const filteredWithCity = listings.filter((listing) => listing.city == city)
    //    console.log(filteredWithCity)

       const filteredForSearch = filteredWithCity.filter((listing) => (listing.bedrooms >= bedroomFilter && listing.bathrooms >= bathroomFilter && listing.price < priceFilter && listing.neighborhood.includes(neighborhoodFilter)))
       console.log(filteredForSearch)
    // listing bathrooms not working

       const listedApartments = filteredForSearch.map((listing) => {
           return(
               <ListingCards listing = {listing} key = {listing.id} user = {user} />
           
           )
       })
  
        const listingNeighborhoods = filteredWithCity.map((listing) => {
            return( listing.neighborhood)
        })
        const distinctNeighborhoods = [...new Set(listingNeighborhoods)]
        

        const NeighborhoodList = listingNeighborhoods.map((neighborhood) =>{
            return(
                <ListingNeighborhoods neighborhood = {neighborhood} />
            )
        })

       function filterSearch({price,bedrooms,bathrooms,neighborhoods}){
            setBathroomFilter(bathrooms)
            setBedroomFilter(bedrooms)
            setPriceFilter(price)
            setNeighborhoodFilter(neighborhoods)
        //    console.log(price)
        //    console.log(bedrooms)
        //    console.log(price,bedrooms,bathrooms,neighborhoods)
        //    console.log(neighborhoods)
       }

    return(
        <div>
            <h1>Welcome {user.username}</h1>
            <Filter filterSearch = {filterSearch} distinctNeighborhoods = {distinctNeighborhoods}/>
            <p onClick = {(e) => setCity("Austin")}>Austin</p>
            <p onClick = {(e) => setCity("Boston")}>Boston</p>
            <p onClick = {(e) => setCity("Los Angeles")}>Los Angeles</p>
            <p onClick = {(e) => setCity("Manhattan")}>New York</p>
            {/* {chosenApartment ?
            <OneListing listing = {chosenApartment} />: */}
       {listedApartments}
            {/* } */}
       {/* {NeighborhoodList} */}

       </div>
    )
}
export default ListingContainer;