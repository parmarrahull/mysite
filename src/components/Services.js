import React from 'react'
import { FaGithub, FaCamera, FaCodepen, FaApple, FaFileVideo, FaSearchengin } from 'react-icons/fa';

export const Services = () => {
    const [header] = React.useState({
        mainHeader: "SERVICES",
        subHeading: "My Services",
        text: "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. Lorem Ipsum standard dummy text.",
    });

    return (
        <div className="services">
            <div className="container">
                <div className="services__header">
                    <div className="common">
                        <h3 className="heading"> {header.mainHeader} </h3>
                        <h1 className="mainHeader"> {header.subHeading} </h1>
                        <p className="mainContent"> {header.text} </p>
                        <div className="commonBorder"></div>
                    </div>

                    <div className="row bgMain">
                        <div className="col-4 bgMain">
                            <div className="services__box">
                                <FaGithub className="commonIcons" />
                                <div className="services__box-header"> Web Development </div>
                                <div className="services__box-p">
                                    Lorem Ipsum is simply dummy text of the printing industry. simply dummy
                                </div>
                            </div>
                        </div>
                        <div className="col-4 bgMain">
                            <div className="services__box">
                                <FaCamera className="commonIcons" />
                                <div className="services__box-header"> Photography </div>
                                <div className="services__box-p">
                                    Lorem Ipsum is simply dummy text of the printing industry. simply dummy
                                </div>
                            </div>
                        </div>
                        <div className="col-4 bgMain">
                            <div className="services__box">
                                <FaCodepen className="commonIcons" />
                                <div className="services__box-header"> Web Desing </div>
                                <div className="services__box-p">
                                    Lorem Ipsum is simply dummy text of the printing industry. simply dummy
                                </div>
                            </div>
                        </div>
                        <div className="col-4 bgMain">
                            <div className="services__box">
                                <FaApple className="commonIcons" />
                                <div className="services__box-header"> Web Development </div>
                                <div className="services__box-p">
                                    Lorem Ipsum is simply dummy text of the printing industry. simply dummy
                                </div>
                            </div>
                        </div>
                        <div className="col-4 bgMain">
                            <div className="services__box">
                                <FaFileVideo className="commonIcons" />
                                <div className="services__box-header"> App Devlopment </div>
                                <div className="services__box-p">
                                    Lorem Ipsum is simply dummy text of the printing industry. simply dummy
                                </div>
                            </div>
                        </div>
                        <div className="col-4 bgMain">
                            <div className="services__box">
                                <FaSearchengin className="commonIcons" />
                                <div className="services__box-header"> SEO Expart </div>
                                <div className="services__box-p">
                                    Lorem Ipsum is simply dummy text of the printing industry. simply dummy
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" />
        </div>
    )
}

export default Services;