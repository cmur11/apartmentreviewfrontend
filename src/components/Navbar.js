import { Link } from 'react-router-dom';

function Navbar(){
        return(
            <div>
                <ul id ="nav">
                    <div className="Nav__container">
                    <li><Link to= "/home">Home</Link></li>
                    <li><a href = "#">Cities</a></li>
                    <li><Link to= "/saved_listings">Saved Apartments</Link></li>
                    <li><Link to= "/login">Logout</Link></li>
                    </div>
                </ul>
            </div>
        )
}
export default Navbar;