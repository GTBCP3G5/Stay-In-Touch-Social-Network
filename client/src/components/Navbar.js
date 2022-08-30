import React, { useState, useEffect } from 'react';

export default function Navbar () {
    const [width, setWidth] = React.useState(window.innerWidth);
    
    React.useEffect(() => {
        window.addEventListener("resize", updateWidth);
    })

    const updateWidth = () => {
        setWidth(window.innerWidth);
    }

    let currentNav;
    if(width < 500) {
        currentNav = (
            <div>
            <nav className="navbar navbar-dark bg-dark">
            <div classNAme="container-fluid">
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
        )

    } else {
        currentNav = (
            <nav className="">
                <span>Favorites</span>
                <span>Friends</span>
            </nav>
        )
    }

    return (
    <div>
        {currentNav}
    </div>
    )
}