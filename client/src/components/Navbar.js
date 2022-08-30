// Packages
import React, { useState, useEffect } from 'react';

export default function Navbar () {
    // Set width of window to current window size
    const [width, setWidth] = React.useState(window.innerWidth);
    
    // Resize based on current window size
    React.useEffect(() => {
        window.addEventListener("resize", updateWidth);
    })

    const updateWidth = () => {
        setWidth(window.innerWidth);
    }

    // Value to hold Navbar
    let currentNav;

    // Styling
    const navbar = {
        backgroundColor: "#423e4f",
        // height: "100%"
    }

    const navLinks = {
        marginLeft: "2rem",
        // margin: "1rem"
    }

    const navContainer = {
        display: "flex",
        alignItems: "center"
    }

    // For smaller screens
    if(width < 1000) {
        currentNav = (
            <div>
            <nav style={navbar} className="navbar">
            <div className="center container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            </nav>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <h5 className="text-white h4">Collapsed content</h5>
                    <span className="text-muted">Toggleable via the navbar brand.</span>
                </div>
            </div>
        </div>
        // <h1>Less than 1000</h1>
        )

    } 
    
    // For bigger screens
    else {
        currentNav = (
            <nav style={navbar} className="nav">
        {/* <a href="/" className="site-title"></a> */}
            <ul style={navContainer} className="left hide-on-med-and-down">
                {/* set className to "active" to change color */}
                <li style={navLinks} className="">
                    <i className="material-icons">home</i>
                </li>
                <li style={navLinks} className="">
                    <a href="/create_post">New Post</a>
                </li>
                <li style={navLinks} className="">
                    <a href="/friends">Friends</a>
                </li>
                <li style={navLinks} className="">
                    <a href="/favorites">Favorites</a>
                </li>
            </ul>
        </nav>
            // <h1>Greater than or equal to 1000</h1>
        )
    }

    return (
    <div>
        {currentNav}
    </div>
    )
}