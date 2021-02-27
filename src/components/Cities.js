import { Link } from "react-router-dom";
import react, {useState} from "react"
function Cities({setCity}){

    return(
        <div className = "City Selector"> 
        <h1>Welcome! Please select a city to explore!</h1>
        <Link to ="/home">
        <button onClick = {(e) => setCity(e.target.value)} value = "Manhattan">New York</button>
        <button onClick = {(e) => setCity(e.target.value)} value = "Austin">Austin</button>
        <button onClick = {(e) => setCity(e.target.value)} value = "Los Angeles">Los Angeles</button>
        <button onClick = {(e) => setCity(e.target.value)} value = "Boston">Boston</button>
        </Link>
        </div>
    )
}

export default Cities;