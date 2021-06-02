import {Link, NavLink} from "react-router-dom";

const Navbar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/cart">Cart</NavLink>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </div>
                <Link to="/cart" className="badge nav-link rounded-pill bg-info text-dark p-2">
                        <i className="fas fa-shopping-cart"/> {props.itemsQuantity}
                    </Link>

            </div>
        </nav>
    );

}

export default Navbar;