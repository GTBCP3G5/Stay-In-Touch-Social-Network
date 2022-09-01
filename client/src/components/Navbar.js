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
                                {Auth.loggedIn() ? (<a className="nav-link active" href="/home"><i className="nav-link active material-icons">home</i></a>) : (<Link to="/login" className="text-black">Login</Link>)}
                            </li>
                            <li className="nav-item">
                                {Auth.loggedIn() ? (<a className="nav-link active" href="/create_post">New Post</a>) : (<a className="hidden" href="/create_post">New Post</a>)}
                            </li>
                            <li className="nav-item">
                                {Auth.loggedIn() ? (<a className="nav-link active" href="/friends">Friends</a>) : (<a className="hidden" href="/friends">Friends</a>)}
                            </li>
                            <li className="nav-item">
                                {Auth.loggedIn() ? (<a className="nav-link active" href="/favorites">Favorites</a>) : (<a className="hidden" href="/favorites">Favorites</a>)}
                            </li>
                            <li className="nav-item text-black">
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
            <nav className="nav bg-slate-800">
            <ul style={navContainer} className="left hide-on-med-and-down">
                <li style={navLinks}>
                    {Auth.loggedIn() ? (<a href="/home"><i className="material-icons">home</i></a>) : (<Link to="/login">Login</Link>)}
                </li>
                <li style={navLinks}>
                    {Auth.loggedIn() ? (<a href="/create_post">New Post</a>) : (<a className="hidden" href="/create_post">New Post</a>)}
                </li>
                <li style={navLinks}>
                    {Auth.loggedIn() ? (<a href="/friends">Friends</a>) : (<a className="hidden" href="/friends">Friends</a>)}
                </li>
                <li style={navLinks}>
                    {Auth.loggedIn() ? (<a href="/favorites">Favorites</a>) : (<a className="hidden" href="/favorites">Favorites</a>)}
                </li>
                <li style={navLinks}>
                    <a href="#!">{Auth.loggedIn() ? (<Logout />) : (<div></div>)}</a>
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