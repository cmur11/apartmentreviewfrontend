// import logo from './logo.svg';
import react, {useState} from "react"
import Navbar from "./Navbar"
import SavedListingsContainer from "./SavedListingsContainer"
import Cities from "./Cities"
import LoginForm from "./LoginForm"
import ListingContainer from "./ListingContainer.js"
import OneListing from "./OneListing"
import AppliedListings from "./AppliedListings"
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import '../App.css';


function App() {
 const [city, setCity] = useState("")
//  const [chosenApartment, setChosenApartment] = useState([])


//  function oneApartment(listing){
//    <Link to = "/apartment">

//      setChosenApartment(listing)
//    </Link>
//  }
console.log(city)

  return (
    <div className="App">
      <Router>
      <Route>

      <Navbar city = {city}/>
      </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path = "/welcome">
          <Cities setCity = {setCity}/>
        </Route>
        <Route exact path= "/home/">
          <ListingContainer city = {city} setCity = {setCity} />
        </Route>
       <Route exact path = "/apartment/:id">
        <OneListing />
       </Route>
       <Route exact path = "/saved_listings">
        <SavedListingsContainer />
       </Route>
       <Route exact path = "/applied_listings">
        <AppliedListings />
       </Route>
      </Router>
      {/* chosenApartment = {chosenApartment} */}
      {/* {chosenApartment ?  <OneListing chosenApartment = {chosenApartment}/> :<ListingContainer city = {city} setCity = {setCity} oneApartment = {oneApartment}/>} */}
    </div>
  );
}

export default App;


{/* <header className="App-header">
{/* <img src={logo} className="App-logo" alt="logo" /> */}
{/* <p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
// </header> */} 