import React, { useState } from "react";

function Filter({filterSearch, distinctNeighborhoods}){
    const [bathrooms, setBathrooms] = useState("All")
    const [bedrooms, setBedrooms] = useState("All")
    const [price, setPrice] = useState("All")
    const [neighborhoods, setNeighborhoods] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        filterSearch({price,bedrooms,bathrooms,neighborhoods})
        // console.log(neighborhoods)
  
    }

    const neighborhoodSelect = distinctNeighborhoods.map(neighborhood =>{

        return(<option value = {neighborhood}>{neighborhood}</option>)
    })
    return(
        <div className = "Filter DropDowns">

<form className = "filter form" onSubmit = {(e) =>handleSubmit(e)}> 
        <label className = "bathroomLabel">Bathrooms:  </label>
        <select onChange = {(e) => setBathrooms(e.target.value)} class = "Bathrooms">
            <option value = "All"> </option>
            <option value = "1">1+</option>
            <option value = "2">2+</option>
            <option value = "3">3+</option>
        </select>
        <label className = "bedroomLabel" >Bedrooms:  </label>
        <select class = "Bedrooms" onChange = {(e) => setBedrooms(e.target.value)}>
            <option value = "All"> </option>
            <option value = "0">Studio</option>
            <option value = "1">1+</option>
            <option value = "2">2+</option>
            <option value = "3">3+</option>
        </select>
        {/* <br></br> */}

        <label className = "neighborhoodLabel">Neighborhood:</label>
            <select class = "Neighborhood" onChange = {(e) => setNeighborhoods(e.target.value)}>
            <option value = "All"> </option>
            {neighborhoodSelect}
                
            </select>


        <label className = "priceLabel" >Price:</label>
        <select class = "Price" onChange = {(e) => setPrice(e.target.value)}>
        <option value = "All"> </option>
        <option value = "800">$800</option>
        <option value = "1000">$1,000+</option>
        <option value = "1200">$1,200+</option>
        <option value = "1500">$1,500+</option>
        </select>
        <input type = "submit"/>
        
</form>
       
         </div>
    )
}

export default Filter;