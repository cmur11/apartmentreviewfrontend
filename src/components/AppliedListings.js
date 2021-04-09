import react, {useState,useEffect} from "react"
import AppliedListing from "./AppliedListing"
import {Container} from 'semantic-ui-react'

function AppliedListings({listing}){
    const [appliedListings,setAppliedListings] = useState([])
    useEffect(()=> {
        fetch('https://lit-brushlands-74782.herokuapp.com/applied_listings')
        .then(res => res.json())
        .then((listings) => setAppliedListings(listings))
       }, [])

       const appliedArr = appliedListings.map((appliedListing) => {
       return(<AppliedListing appliedListing = {appliedListing} key = {appliedListing.key}/>)
       }
       )
return(
    <Container textAlign='center'>

    <div>
        {appliedArr}
    </div>
    </Container>
)

}

export default AppliedListings;