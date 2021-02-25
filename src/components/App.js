// import logo from './logo.svg';
import react, {useState, useEffect} from "react"
import LoginForm from "./LoginForm"
import '../App.css';

function App() {
  const [currentUser,setCurrentUser] = useState(null);


  return (
    <div className="App">
     
      <LoginForm/>
      
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