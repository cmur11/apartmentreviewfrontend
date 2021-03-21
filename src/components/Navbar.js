import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
function Navbar({city,user}){
    
        return(
                 <Menu>
                        <Menu.Item><NavLink to= "/home/">Home</NavLink></Menu.Item>
                        <Menu.Item><NavLink to= "/applied_listings">Applied Apartments</NavLink></Menu.Item>
                        <Menu.Item><NavLink to= "/saved_listings">Saved Apartments</NavLink></Menu.Item>
                        <Menu.Menu position= "right">
                            <Menu.Item><NavLink to= "/login">Logout {user.username} </NavLink></Menu.Item>
                        </Menu.Menu>
                 </Menu>
       
        )
}
export default Navbar;