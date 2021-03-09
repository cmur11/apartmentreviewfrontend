import { Link } from 'react-router-dom';
import {  Nav, NavDropdown } from 'react-bootstrap';
function Navbar({city}){
    
        return(
            <div>
                <ul id ="nav">
                    <div className="Nav__container">
                    <li><Link to= "/home/">Home</Link></li>
                    <li><Link to= "/applied_listings">Applied Apartments</Link></li>
                    <li><Link to= "/saved_listings">Saved Apartments</Link></li>
                    <li><Link to= "/login">Logout</Link></li>
                    </div>
                </ul>
            </div>
         
        )
}
export default Navbar;