// import logo from './logo.svg';
import react, {useState, useEffect} from "react"
import Cities from "./Cities"
import LoginForm from "./LoginForm"
import ListingContainer from "./ListingContainer.js"
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import '../App.css';

function App() {
 const [city, setCity] = useState("")


console.log(city)

  return (
    <div className="App">
      <Router>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path = "/welcome">
          <Cities setCity = {setCity}/>
        </Route>
        <Route exact path="/home">
          <ListingContainer city = {city} setCity = {setCity}/>
        </Route>
      </Router>
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