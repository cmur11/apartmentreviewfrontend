// import logo from './logo.svg';
//<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"></link>
import react, {useState, useEffect} from "react"
import Navbar from "./Navbar.js"
import SavedListingsContainer from "./SavedListingsContainer"
import Cities from "./Cities"
import LoginForm from "./LoginForm"
import ListingContainer from "./ListingContainer.js"
import OneListing from "./OneListing"
import AppliedListings from "./AppliedListings"
import 'bootstrap/dist/css/bootstrap.min.css' 
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import NavBarSem from "./NavBarSem"
// import 'bootstrap/dist/css'
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
        <Route  exact path = "/welcome">
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


