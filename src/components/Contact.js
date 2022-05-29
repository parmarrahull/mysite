import React from 'react'
import { FaMapMarkerAlt, FaPhone,FaEnvelope,  FaLinkedinIn, FaInstagram, FaGithub} from "react-icons/fa";

const Contact = () => {

    const [header] = React.useState({
        subHeading: "Contact Me",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
    })
    return (
        <div className="Contact">
            <div className="container">
                <div className="common">
                    <h1 className="mainHeader"> {header.subHeading} </h1>
                    <p className="mainContent"> {header.text} </p>
                </div>
            </div>
            <div className="contact__box">
                <div className="contact__left">
                    <h3> Send your request</h3>
                    <form>
                        <div className="input__row">
                            <div className="input__group">
                                <label className="input__box"> Your Name </label>
                                <input className="input__text" type="text" ></input>
                            </div>
                            <div className="input__group">
                                <label className="input__box"> Your Email </label>
                                <input className="input__text" type="text" ></input>
                            </div>
                            <div className="input__group">
                                <label className="input__box"> Your Phone </label>
                                <input className="input__text" type="email" ></input>
                            </div>
                            <div className="input__group">
                                <label className="input__box"> Your Company </label>
                                <input className="input__text" type="text"></input>
                            </div>
                        </div>
                        <label className="input__box"> Message </label>
                        <textarea rows="5" placeholder="Your Message"></textarea> <br />
                        <button className="button" type="submit"> SEND </button>
                    </form>
                </div>
                <div className="contact__right">
                    <h3> Contact information </h3>
                    <table>
                    <tr>
                            <td> <FaMapMarkerAlt /> </td>
                            <td> Ahmedabad </td>
                        </tr>
                        <tr>
                            <td> <FaPhone /> </td>
                            <td> 9104744888 </td>
                        </tr>
                        <tr>
                            <td> <FaEnvelope /> </td>
                            <td> parmarrahul1974@gmail.com </td>
                        </tr>
                    </table>
                    <ul className="contactCircles">
                            <ul>
                                <li> <a href="https://github.com/"> <FaGithub /> </a> </li>
                                <li> <a href="https://www.linkedin.com/feed/"> <FaLinkedinIn /> </a> </li>
                                <li> <a href="https://www.instagram.com/"> <FaInstagram /> </a> </li>
                            </ul>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact;
