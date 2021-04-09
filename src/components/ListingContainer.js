import {useState, useEffect} from "react"
import ListingNeighborhoods from "./ListingNeighborhoods"
import ListingCards from "./ListingCards"
import Filter from "./Filter"
// import OneListing from "./OneListing"
import { Container,Card } from "semantic-ui-react"


function ListingContainer({city, setCity,oneApartment, user}){
    // const [user,setUser] = useState([])
    const [listings,setListings] = useState([])
    const [bathroomFilter, setBathroomFilter] = useState(0)
    const [bedroomFilter, setBedroomFilter] = useState(0)
    const [priceFilter, setPriceFilter] = useState(1000000)
    const [neighborhoodFilter, setNeighborhoodFilter] = useState([])

  
  

    useEffect(()=> {
        fetch('https://lit-brushlands-74782.herokuapp.com/listings')
        .then(res => res.json())
        .then((listings) => setListings(listings))
       }, [])

       const filteredWithCity = listings.filter((listing) => listing.city === city)
    

       const filteredForSearch = filteredWithCity.filter((listing) => (listing.bedrooms >= bedroomFilter && listing.bathrooms >= bathroomFilter && listing.price < priceFilter && listing.neighborhood.includes(neighborhoodFilter)))
    //    console.log(filteredForSearch)
   

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
       
       }

      
    return(
        <div>
            <h1 className= "title">Tenant Truths</h1>
            <Filter filterSearch = {filterSearch} distinctNeighborhoods = {distinctNeighborhoods}/>
            <div className = "city" align = "center" style={{padding: "20px"}}> 
            <h3>Cities</h3>
            <p onClick = {(e) => setCity("Austin")}>Austin</p>
            <p onClick = {(e) => setCity("Boston")}>Boston</p>
            <p onClick = {(e) => setCity("Los Angeles")}>Los Angeles</p>
            <p onClick = {(e) => setCity("Manhattan")}>New York</p>
            </div>
           
            <h2>Results: {filteredForSearch.length}</h2>
            <div className='listing-card-container'>
            <Container style={{padding: "20px"}}>
              <Card.Group itemsPerRow={3} style={{padding: "20px", margin: "5px"}} >
                {listedApartments}
                </Card.Group>
            </Container>

            </div>
      

       </div>
    )
}
export default ListingContainer;