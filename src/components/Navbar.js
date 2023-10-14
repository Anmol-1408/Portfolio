import React from 'react'
import Logo from '../image/logo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            {/* <!-- LOGO --> */}
            <div className="logo"><a href='/#home'><img src={Logo} alt='logo'/></a></div>

            {/* <!-- NAVIGATION MENU --> */}
            <ul className="nav-links">

                {/* <!-- USING CHECKBOX HACK --> */}

                <input type="checkbox" id="checkbox_toggle" />
                <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                {/* <!-- NAVIGATION MENUS --> */}
                <div className="menu">

                    <li><a href="/#home">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </div>
            </ul>
        </nav>

    )
}
