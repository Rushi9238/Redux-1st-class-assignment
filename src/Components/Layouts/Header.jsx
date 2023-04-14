import React from 'react'
import '../../CSS_files/Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className="navbar">
      <h1>Redux</h1>
      <ul>
        <Link to={'/'}>
        <li>Home</li>
        </Link>
        <Link to={'/contact'}>
        <li>Contact</li>
        </Link>
        <Link to={'/product'}>
        <li>Product</li>
        </Link>
        <Link to={'/redux'}>
        <li>Redux</li>
        </Link>

      </ul>
    </div>
    </>
  )
}

export default Header