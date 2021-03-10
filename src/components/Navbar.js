import { Link } from 'react-router-dom';
import {  Nav, NavDropdown } from 'react-bootstrap';
import { Menu } from 'semantic-ui-react'
function Navbar({city}){
    
        return(
         
                 <Menu>

                <ul id ="nav">
                    <div className="Nav__container">
                    <Menu.Item><Link to= "/home/">Home</Link></Menu.Item>
                    <Menu.Item><Link to= "/applied_listings">Applied Apartments</Link></Menu.Item>
                    <Menu.Item><Link to= "/saved_listings">Saved Apartments</Link></Menu.Item>
                    <Menu.Item><Link to= "/login">Logout</Link></Menu.Item>
                    </div>
                </ul>
                 </Menu>
         
         
        )
}
export default Navbar;