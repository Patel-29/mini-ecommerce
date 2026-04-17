import { Link } from "react-router-dom";

function Navbar({ cartCount}) {
    return(
        <nav className = "navbar">
        <div className="logo"><h2>Mini Shop</h2></div>
        <div className ="nav-links">
        <Link to ="/">Home</Link>
       <Link to="/cart">Cart ({cartCount})</Link>
      <Link to="/login">Login</Link>
      </div>
        </nav>
    )

}
export default Navbar;
