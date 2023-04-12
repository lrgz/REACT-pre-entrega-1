import "./styles/NavBar.css";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "var(--color-second-jc",
  };
  const handleToggle = () => {
    const navlist = document.querySelector(".navlist-list");
    navlist.classList.toggle("open");
  };

  return (
    <nav className="navbar-main">
      <div className="navbar-items">
        <div className="navlogo-container">
          <Link to="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/react-comision-45105.appspot.com/o/logo-top.png?alt=media&token=8ed1bf4e-a39e-4e9a-b195-cc8979c2f5a9"
              alt="just-cupcakes-logo"
              className="navbar-logo"
            />
          </Link>
        </div>
        <div className="navlist-container">
          <p className="nav-menu" onClick={handleToggle}>
            elegí tu variedad
          </p>
          <div className="navlist-list">
            <ul className="navlist" onClick={handleToggle}>
              <NavLink
                to="/category/Clasica"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <li className="navlist-item">Clasica</li>
              </NavLink>
              <NavLink
                to="/category/Super"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <li className="navlist-item">Super</li>
              </NavLink>
              <NavLink
                to="/category/Especial"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <li className="navlist-item">Especial</li>
              </NavLink>
            </ul>
          </div>
        </div>
        <Link to="/cart">
          <div className="navcart-container">
            <CartWidget />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
