import React from 'react'

const NavBar = () => {
  return (
    <div>
    <nav className="navbar">
        <ul className="nav-list">
            <ul><a href="/">Home</a></ul>
            <ul><a href="/about">About</a></ul>
            <ul><a href="/services">Services</a></ul>
            <ul><a href="/portfolio">Portfolio</a></ul>
            <ul><a href="/contact">Contact</a></ul>
        </ul>
    </nav>
    </div>
  )
}

export default NavBar
