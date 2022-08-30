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
                    {/* <h5 className="text-white h4">Collapsed content</h5>
                    <span className="text-muted">Toggleable via the navbar brand.</span> */}
                    <nav class="navbar bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offcanvas navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
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