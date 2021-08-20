import React from 'react'
import '../styles/NavBar.css'

const NavBar = ({user}) => (
    <nav className = "navbar navbar-expand-lg navbar-dark bg-dark">
        <img 
            src={user.avatar_url}
            width="50"
            height="50" 
            className="mr-3 avatar"
            alt="profile"
        />
        <h3 style = {{ color: "white" }}>{user.login}</h3>
        <a className="ml-auto d-flex align-items-center" href="#">
            search
        </a>
    </nav>
)

export default NavBar