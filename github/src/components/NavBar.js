import React from 'react'
import '../styles/NavBar.css'

const NavBar = () => (
    <nav className = "navbar navbar-expand-lg navbar-dark bg-dark">
        <img 
            src="https://avatars.githubusercontent.com/imlidya"
            width="50"
            height="50" 
            className="mr-3 avatar"
            alt="profile"
        />
        <h3 style = {{ color: "white" }}>Username</h3>
        <a className="ml-auto d-flex align-items-center" href="#">
            search
        </a>
    </nav>
)

export default NavBar