import { NavLink } from 'react-router-dom';
// import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react'
function Navbar({user, setUser}){

    function logout() {
        // remove the token
        localStorage.removeItem("token");
        // clear currentUser
        setUser(null);
      }
    console.log(user)
        return(



        // <header>
        //     <div>
        //         <div>
        //         <Link to="/">Home</Link>
        //         </div>

        //         <div>
        //             {user ? (
        //                 <>
        //                 <Link to="/profile">Profile</Link>
        //                 <button onClick={logout}>Logout</button>
        //                 </>
        //             ) : (
        //                 <>
        //                 <Link to="/signup">Signup</Link>
        //                 <Link to="/login">Login</Link>
        //                 </>
        //             )}
        //         </div>

        //         <div>
        //         <Link to="/applied_listings">Applied Listings</Link>
        //         </div>

        //         <div>
        //         <Link to="/saved_listings">Saved Listings</Link>
        //         </div>
        //     </div>
        // </header>

                 <Menu>
                        <Menu.Item><NavLink to= "/home/">Home</NavLink></Menu.Item>
                        <Menu.Item><NavLink to= "/applied_listings">Applied Apartments</NavLink></Menu.Item>
                        <Menu.Item><NavLink to= "/saved_listings">Saved Apartments</NavLink></Menu.Item>
                        <Menu.Menu position= "right">
                           {user ? <Menu.Item><NavLink to= "/login" onClick = {logout}>Logout {user.username} </NavLink></Menu.Item> : null}

                           
                        </Menu.Menu>
                 </Menu>
       
        )
}
export default Navbar;