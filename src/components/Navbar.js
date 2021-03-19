import { NavLink } from 'react-router-dom';

import { Menu } from 'semantic-ui-react'
function Navbar({city,user}){
    
        return(
                 <Menu>

                    {/* <ul id ="nav"> */}
                        {/* <div className="Nav__container"> */}
                            <Menu.Item><NavLink to= "/home/">Home</NavLink></Menu.Item>
                            <Menu.Item><NavLink to= "/applied_listings">Applied Apartments</NavLink></Menu.Item>
                            <Menu.Item><NavLink to= "/saved_listings">Saved Apartments</NavLink></Menu.Item>
                            {/* <Menu.Menu position= "justified">
                            <Menu.Item className = "tenant"><NavLink to= "/home">Tenant Truths</NavLink></Menu.Item>
                            </Menu.Menu> */}
                            <Menu.Menu position= "right">
                                <Menu.Item><NavLink to= "/login">Logout {user.username} </NavLink></Menu.Item>
                            </Menu.Menu>
                     {/* </div> */}
                    {/* </ul> */}
                 </Menu>
         
         
        )
}
export default Navbar;