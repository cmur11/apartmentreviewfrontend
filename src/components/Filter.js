import React, { useState } from "react";

function Filter({filterSearch, distinctNeighborhoods}){
    const [bathrooms, setBathrooms] = useState(0)
    const [bedrooms, setBedrooms] = useState(0)
    const [price, setPrice] = useState(10000000)
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
        <select onChange = {(e) => setBathrooms(e.target.value)} className = "Bathrooms">
            <option value = "0"> </option>
            <option value = "1">1+</option>
            <option value = "2">2+</option>
            <option value = "3">3+</option>
        </select>
        <label className = "bedroomLabel" >Bedrooms:  </label>
        <select className = "Bedrooms" onChange = {(e) => setBedrooms(e.target.value)}>
            <option value = "0"> </option>
            <option value = "0">Studio</option>
            <option value = "1">1+</option>
            <option value = "2">2+</option>
            <option value = "3">3+</option>
        </select>
        {/* <br></br> */}

        <label className = "neighborhoodLabel">Neighborhood:</label>
            <select className = "Neighborhood" onChange = {(e) => setNeighborhoods(e.target.value)}>
            <option value = ""> </option>
            {neighborhoodSelect}
                
            </select>


        <label className = "priceLabel" >Max Price:</label>
        <select className = "Price" onChange = {(e) => setPrice(e.target.value)}>
        <option value = "10000000"> </option>
        <option value = "750">$750</option>
        <option value = "1000">$1,000</option>
        <option value = "1200">$1,250</option>
        <option value = "1500">$1,500</option>
        <option value = "1750">$1,750</option>
        <option value = "2000">$2,000</option>
        <option value = "2250">$2,250</option>
        <option value = "2500">$2,500</option>
        <option value = "2750">$2,750</option>
        <option value = "3000">$3,000</option>
        <option value = "3250">$3,250</option>
        <option value = "200000">$200,000</option>
        </select>
        <input type = "submit"/>
        
</form>
       
         </div>
    )
}

export default Filter;