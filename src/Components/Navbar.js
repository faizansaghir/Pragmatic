import React from 'react'
import NavStyle from './navbar.module.css'

function Navbar() {
    return (
        <nav>
            <div id={NavStyle.navbar}>
                <a href="index.html" className={NavStyle.nav_button}>CONTACT US</a>
                <a href="index.html" className={NavStyle.nav_button}>ABOUT US</a>
                <a href="index.html" className={NavStyle.nav_button}>HOME</a>
                <a href="index.html" className={NavStyle.logo_button}>PRAGMATIC</a>
            </div>
        </nav>
        
    )
}

export default Navbar
