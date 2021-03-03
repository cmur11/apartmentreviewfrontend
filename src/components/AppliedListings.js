import react, {useState,useEffect} from "react"
import AppliedListing from "./AppliedListing"

function AppliedListings({listing}){
    const [appliedListings,setAppliedListings] = useState([])
    useEffect(()=> {
        fetch('http://localhost:3000/applied_listings')
        .then(res => res.json())
        .then((listings) => setAppliedListings(listings))
       }, [])

       const appliedArr = appliedListings.map((appliedListing) => {
       return(<AppliedListing appliedListing = {appliedListing} key = {appliedListing.key}/>)
       }
       )
return(
    <div>
        {appliedArr}
    </div>
)

}

export default AppliedListings;