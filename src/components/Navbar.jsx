import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { ThemeContext } from './ThemeContext'

const Navbar = () => {
  const { theme, dispatch } = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/ShopKart">
          Shop<span style={{ color: 'red' }}>Kart</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/Home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/About" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Products" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Cart" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Cart</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Login</NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
            </li>
            <li>
              <NavLink>

              </NavLink>
            </li>
            <li className="nav-item">
              <button 
                className="btn btn-outline-secondary ms-2"
                onClick={() => dispatch({ type: 'THEME_TOGGLE' })}
              >
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
