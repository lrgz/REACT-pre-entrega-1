import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link,NavLink} from 'react-router-dom';


const Navbar = () => {

  return (
    <header>
      <nav className="navigation">
          <Link to={"/"}>
            <img src="../../assets/logo.png" alt="Logo Fugazzeta" />
          </Link>
        <Link to={"/"} className="brand-name">
          Pizzeria Fugazzeta
        </Link>
        <button className="hamburger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="navigation-menu">
          <ul>
            <li>
              <NavLink to={'/categoria/clasicas'}>Clasicas</NavLink>
            </li>
            <li>
              <NavLink to={'/categoria/super'}>Super</NavLink>
            </li>
            <li>
              <NavLink to={'/categoria/especiales'}>Especiales</NavLink>
            </li>
            <li>
              <NavLink to={'/categoria/vegetarianas'}>Vegetarianas</NavLink>
            </li>
            <Link to={"/cart"}>
                <CartWidget />
            </Link>            
          </ul>
      
        </div>
        
      </nav>
    </header>
  )
}

export default Navbar