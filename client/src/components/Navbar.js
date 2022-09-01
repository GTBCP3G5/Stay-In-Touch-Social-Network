// Package for react and hooks
import React, { useState, useEffect } from 'react';
import Logout from '../components/Logout';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

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
        fontFamily: "'Kanit', sans-serif",
        fontWeight: "100"
    }

    const navContainer = {
        display: "flex",
        alignItems: "center"
    }

    // For smaller screens
    if(width < 1000) {
        currentNav = (
        <div>
            <div className="" id="navbarToggleExternalContent">
                <div className="p-4">
                    {/* <h5 className="text-white h4">Collapsed content</h5>
                    <span className="text-muted">Toggleable via the navbar brand.</span> */}
                    <nav className="bg-zinc-800 navbar fixed-top">
                    <div className="container-fluid">
                        {/* <a className="navbar-brand" href="#">Offcanvas navbar</a> */}
                        <button className="navbar-toggler hover:bg-green-300 bg-green-400 focus:bg-green-500" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-start" id="offcanvasNavbar">
                        <div className="offcanvas-body bg-zinc-200">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-zinc-800">
                            <li className="nav-item">
                                {Auth.loggedIn() ? (<a className="nav-link active" href="/home"><i className="nav-link active material-icons">home</i></a>) : (<div></div>)}
                            </li>
                            <li className="nav-item">
                                {Auth.loggedIn() ? (<a className="nav-link active" href="/create_post">New Post</a>) : (<div></div>)}
                            </li>
                            <li className="nav-item">
                                {Auth.loggedIn() ? (<a className="nav-link active" href="/friends">Friends</a>) : (<div></div>)}
                            </li>
                            <li className="nav-item">
                                {Auth.loggedIn() ? (<a className="nav-link active" href="/favorites">Favorites</a>) : (<div></div>)}
                            </li>
                            <li className="nav-item">
                                {Auth.loggedIn() ? (<Logout />) : (<div></div>)}
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
            <nav className="nav bg-zinc-800">
            <ul style={navContainer} className="left hide-on-med-and-down text-green-400">
                <li style={navLinks}>
                    {Auth.loggedIn() ? (<a href="/home"><i className="material-icons text-green-400">home</i></a>) : (<div></div>)}
                </li>
                <li style={navLinks}>
                    {Auth.loggedIn() ? (<a className="text-green-400" href="/create_post">New Post</a>) : (<div></div>)}
                    
                </li>
                <li style={navLinks}>
                    {Auth.loggedIn() ? (<a className="text-green-400" href="/friends">Friends</a>) : (<div></div>)}
                    
                </li>
                <li style={navLinks}>
                    {Auth.loggedIn() ? (<a className="text-green-400" href="/favorites">Favorites</a>) : (<div></div>)}
                    
                </li>
                <li style={navLinks} className="text-green-400">
                    {Auth.loggedIn() ? (<Logout />) : (<div></div>)}
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