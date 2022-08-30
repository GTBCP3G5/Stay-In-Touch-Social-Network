// Package for react and hooks
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

    const navButton = {
        backgroundColor: "#423e4f"
    }

    // For smaller screens
    if(width < 1000) {
        currentNav = (
        <div>
            <div style={navbar} className="" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    {/* <h5 className="text-white h4">Collapsed content</h5>
                    <span className="text-muted">Toggleable via the navbar brand.</span> */}
                    <nav style={navbar} class="navbar fixed-top">
                    <div class="container-fluid">
                        {/* <a className="navbar-brand" href="#">Offcanvas navbar</a> */}
                        <button style={navButton} className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-start" id="offcanvasNavbar">
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" href="/home">
                                    <i className="nav-link active material-icons">home</i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/create_post">New Post</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/friends">Friends</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/favorites">Favorites</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </nav>
                </div>
            </div>
        </div>
        )

    } 
    
    // For bigger screens
    else {
        currentNav = (
            <nav style={navbar} className="nav">
            <ul style={navContainer} className="left hide-on-med-and-down">
                <li style={navLinks}>
                    <i className="material-icons">home</i>
                </li>
                <li style={navLinks}>
                    <a href="/create_post">New Post</a>
                </li>
                <li style={navLinks}>
                    <a href="/friends">Friends</a>
                </li>
                <li style={navLinks}>
                    <a href="/favorites">Favorites</a>
                </li>
            </ul>
        </nav>
        )
    }

    return (
    <div>
        {currentNav}
    </div>
    )
}