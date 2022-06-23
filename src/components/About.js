import React from 'react'
import img from '../images/ab.jpg';

const About = () => {
    const [header] = React.useState({
        subHeading: "About Me",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
    })

    const [state] = React.useState([
        { id: 1, title: "Name:", text: "Rahul Parmar" },
        { id: 2, title: "Email:", text: "parmarrahul1974@gmail.com" },
        { id: 3, title: "Phone:", text: "9104744888" },
        { id: 4, title: "Linkedin:", text: "Rahul Parmar" },
    ])
    return (
        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className="mainHeader"> {header.subHeading} </h1>
                    <p className="mainContent"> {header.text} </p>
                    <div className="commonBorder"></div>
                </div>
                <div className="row h-650 alignCenter">
                    <div className="col-6">
                        <div className="about__img">
                            <img src={img} alt="man" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about__info">
                            <h1> Hi There </h1>
                            <div className="about__info-p1">
                                In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui
                                at sapien faucibus fermentum ut vel diam. Nullam tempus,nunc id
                                efficitur sagittis,urna est ultricies eros,acporta sem turpis
                            </div>
                            <div className="about__info-p2">
                                Nunc id efficitur sagittis, urna est ultricies, as porta
                                sem turpis porta sem turpis quis leo. Nulla in feugiat elit
                            </div>
                            <div className="info__contacts">
                                <div className="row">
                                    {state.map((info) => (
                                        <div className="col-6">
                                            <strong> {info.title} </strong>
                                            <p> {info.text} </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
