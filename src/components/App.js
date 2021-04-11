
import {useState, useEffect} from "react"
import Navbar from "./Navbar.js"
import SavedListingsContainer from "./SavedListingsContainer"
import Cities from "./Cities"
import SignUpForm from "./SignUpForm"
import LoginForm from "./LoginForm"
import ListingContainer from "./ListingContainer.js"
import OneListing from "./OneListing"
import AppliedListings from "./AppliedListings"
import 'bootstrap/dist/css/bootstrap.min.css' 
import {Switch, Route} from "react-router-dom";
// BrowserRouter as Router
// import 'bootstrap/dist/css'
import '../App.css';


function App() {
 const [city, setCity] = useState("")
 const [user,setUser] = useState(null)
//  const [chosenApartment, setChosenApartment] = useState([])

// console.log(user)
useEffect(() => {
  // TODO: check if there'a token for the logged in user
  // GET /me
  const token = localStorage.getItem("token");
  // debugger
  if (token) {
    fetch('https://lit-brushlands-74782.herokuapp.com/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => r.json())
      .then((user) => {
        // set the user in state
        setUser(user);
      });
  }
}, []);
console.log(user)


  return (
    <div className="App">
      {/* <Router> */}
      <Navbar  user = {user} setUser = {setUser}/>
      <main>
      <Switch>
      
         <Route path="/signup">
            <SignUpForm setUser={setUser} />
            </Route>
          <Route exact path="/login">
            <LoginForm user = {user} setUser = {setUser}/>
          </Route>
          <Route  exact path = "/welcome">
            <Cities setCity = {setCity}/>
          </Route>
          <Route exact path= "/">
            <ListingContainer city = {city} setCity = {setCity} user = {user} />
          </Route>
        <Route exact path = "/apartment/:id">
          <OneListing user = {user}/>
        </Route>
        <Route exact path = "/saved_listings">
          <SavedListingsContainer />
        </Route>
        <Route exact path = "/applied_listings">
          <AppliedListings user = {user}  />
        </Route>

      
      </Switch>
       </main>

      {/* </Router> */}
      {/* chosenApartment = {chosenApartment} */}
      {/* {chosenApartment ?  <OneListing chosenApartment = {chosenApartment}/> :<ListingContainer city = {city} setCity = {setCity} oneApartment = {oneApartment}/>} */}
    </div>
  );
}

export default App;


