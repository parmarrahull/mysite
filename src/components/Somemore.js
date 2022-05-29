import React from 'react'
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

export const Somemore = () => {
    return (
        <div className="Somemore">
            <div className="containerSection">
                <div className="containers"> 
                    Some more!
                </div>
                <div className="row justifyCenter">
                    <div className="col-6">
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor inci-didunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, 1uis nostrud exe-rcitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className="Somemore__name">
                            Rahul Parmar
                        </div>
                        <div className="Somemore__name2">
                            FULL-STACK DEVELOPER
                        </div>
                        <ul className="SomemoretCircles">
                            <ul>
                                <li> <a href="https://github.com/"> <FaGithub /> </a> </li>
                                <li> <a href="https://www.linkedin.com/feed/"> <FaLinkedinIn /> </a> </li>
                                <li> <a href="https://www.instagram.com/"> <FaInstagram /> </a> </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Somemore;