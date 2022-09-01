// Package for react and hooks
import React, { useState, useEffect } from 'react';
import Logout from '../components/Logout';

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

    const navLinks = {
        marginLeft: "2rem",
    }

    const navContainer = {
        display: "flex",
        alignItems: "center"
    }

    // For smaller screens
    if(width < 1000) {
        currentNav = (
        <div>
            <div className="bg-slate-800" id="navbarToggleExternalContent">
                <div className="bg-slate-800 p-4">
                    {/* <h5 className="text-white h4">Collapsed content</h5>
                    <span className="text-muted">Toggleable via the navbar brand.</span> */}
                    <nav className="navbar bg-slate-800 fixed-top">
                    <div className="container-fluid">
                        {/* <a className="navbar-brand" href="#">Offcanvas navbar</a> */}
                        <button className="navbar-toggler bg-slate-800" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
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
                            <li style={navLinks}>
                                <Logout />
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
            <nav className="nav bg-slate-800">
            <ul style={navContainer} className="left hide-on-med-and-down">
                <li style={navLinks}>
                    <a href="/home">
                    <i className="material-icons">home</i>
                    </a>
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
                <li style={navLinks}>
                    <Logout />
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