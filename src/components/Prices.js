import React from 'react'

const Prices = () => {
    const [header] = React.useState({
        mainHeader: "CHOOSE A PLAN",
        subHeading: "Pricing Plan",
        text: "Larem Ipsum is simply dummy text of the printing and typesetting industry. \
                Lorem Ipsum standard dummy text."
    });

    const [state] = React.useState([
        {
            id: 1,
            heading: "Basic",
            price: 50,
            msg1: "5GB Storage Space",
            msg2: "50GB Storage Space",
            msg3: "My SQL Databases",
            msg4: "100 Email Account",
            msg5: "10 Free Domain Names"
        },
        {
            id: 2,
            heading: "Standard",
            price: 80,
            msg1: "5GB Storage Space",
            msg2: "50GB Storage Space",
            msg3: "My SQL Databases",
            msg4: "100 Email Account",
            msg5: "10 Free Domain Names"
        },
        {
            id: 3,
            heading: "Premium",
            price: 160,
            msg1: "5GB Storage Space",
            msg2: "50GB Storage Space",
            msg3: "My SQL Databases",
            msg4: "100 Email Account",
            msg5: "10 Free Domain Names"
        },
    ]);

    return (
        <div className="prices">
            <div className="container">
                <div className="common">
                    <h3 className="heading"> {header.mainHeader} </h3>
                    <h1 className="mainHeader"> {header.subHeading} </h1>
                    <p className="mainContent"> {header.text} </p>
                    <div className="commonBorder"></div>
                </div>
                <div className="row">
                    {state.map(Prices => (
                        <div className="col-4" key={Prices.id}>
                            <div className="price">
                                <div className="priceHeading"> ${Prices.heading} </div>
                                <div className="price__rs"> <span>$</span>${Prices.price}</div>
                                <ul>
                                    <li> {Prices.msg1} </li>
                                    <li> {Prices.msg2} </li>
                                    <li> {Prices.msg3} </li>
                                    <li> {Prices.msg4} </li>
                                    <li> {Prices.msg5} </li>
                                </ul>
                                <div className="price__btn">
                                    <a href="" className="btn btn-outline">
                                        Purchase
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Prices;
