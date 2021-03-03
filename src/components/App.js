// import logo from './logo.svg';
import react, {useState, useEffect} from "react"
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
 const [user,setUser] = useState([])
//  const [chosenApartment, setChosenApartment] = useState([])


useEffect(()=> {
  fetch('http://localhost:3000/users')
  .then(res => res.json())
  .then((users) => setUser(users[0]))
 }, [])

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
          <ListingContainer city = {city} setCity = {setCity} user = {user} />
        </Route>
       <Route exact path = "/apartment/:id">
        <OneListing user = {user}/>
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


