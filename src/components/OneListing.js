function OneListing({listing}){
    return(
        <div  className = "oneListing">
        <h4 >Address:{listing.address}, {listing.city}, {listing.state}, {listing.zip_code}</h4>
        <h5>${listing.price}</h5>
        <p>Bedrooms:{listing.bedrooms}</p>
        <p>Bathrooms:{listing.bedrooms}</p>
        <p>Sqft:{listing.sqft}</p>
        <p>Neighborhood: {listing.neighborhood}</p>
        <img  alt = {listing.address} src = {listing.photos}/>
    </div>
    )
}

export default OneListing;