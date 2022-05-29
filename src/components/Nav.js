import React from 'react'

export const Nav = () => {

    const goHome = () => {
        // let home = document.getElementById("home");
        // console.log(home);
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                    </ul>
                    <ul className="navbar__righ">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Nav;