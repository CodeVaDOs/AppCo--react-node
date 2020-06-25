import React from 'react';

import './App.scss';
import {Button} from '../../components/button/Button';
import {InfoBlock} from "../../components/infoBlock/InfoBlock";

import {PriceBlock} from "../../components/priceBlock/PriceBlock";

function App() {
    return (
        <div>
            <div className="overflow-hidden">
                <header className="header">
                    <img className="bg-image d-none d-sm-block" src="./bg-header.png" alt="bg"/>
                    <img className="bg-image bg-image-mobile d-block d-sm-none" src="./bg-header.png" alt="bg"/>
                    <div className="header-container row">
                        <div className="col-12 col-md-7">
                            <div className="logo-text">AppCo</div>
                            <div className="main-text">

                                <span>Brainstorming</span> for desired perfect Usability
                            </div>
                            <div className="desc-text">
                                Our design projects are fresh and simple and will benefit
                                your business greatly. Learn more about our work!
                            </div>
                            <Button to='/listuserspage' text='View stats' type={1}/>
                        </div>
                        <div className="col-5">
                            <img className="iphone d-none d-xl-block" src="./mobile.png" alt="iphone-img"/>
                        </div>
                    </div>
                </header>
                <main className="main">
                    <div className="main-container mx-auto overflow-hidden">
                        <h2 className="title-page">
                            Why <span>small business owners
                        love</span> AppCo?
                        </h2>
                        <p className="desc-text-page">
                            Our design projects are fresh and simple and will benefit your business greatly. Learn more
                            about our work!
                        </p>

                        <div className="info-cards row justify-content-center">
                            <InfoBlock img="./cleanDesign.png" title="Clean Design"
                                       desc="Increase sales by showing true dynamics of your website."/>
                            <InfoBlock img="./secureData.png" title="Secure Data"
                                       desc="Build your online store’s trust using Social Proof & Urgency."/>
                            <InfoBlock img="./retinaReady.png" title="Retina Ready"
                                       desc="Realize importance of social proof in customer’s purchase decision."/>
                        </div>
                    </div>

                    <div className="learn-more-block px-0 row">
                        <div className="block-container row">
                            <div className="col-12 text-center text-md-left col-md-6">
                                <h2 className="title">
                                    Start Managing your apps business, more faster
                                </h2>
                                <p className="desc">
                                    Objectively deliver professional value with diverse web-readiness. Collaboratively
                                    transition wireless customer service without goal-oriented catalysts for change.
                                    Collaboratively.
                                </p>
                                <Button to='./learnMore' text='Learn More' type={3}/>
                            </div>
                            <div className="right-col d-none d-xl-inline col-md-6">
                                <img className="macbook" src="./macbook.png" alt="macbook-img"/>
                            </div>
                        </div>
                    </div>

                    <div className="price-block-wrapper">
                        <div className="block-container">
                            <div className="price-block">
                                <div className="title-page">
                                    <span>Afforadble Pricing and Packages</span> choose your best one
                                </div>
                                <div className="desc">
                                    Monotonectally grow strategic process improvements vis-a-vis integrated resources.
                                </div>

                                <div className="modules row justify-content-center">
                                    <PriceBlock header="Basic" img="./tasks.png" price="$29"
                                                list={["Push Notifications",
                                                    "Data Transfer",
                                                    "SQL Database",
                                                    "Search & SEO Analytics",
                                                    "24/7 Phone Support",
                                                    "2 months technical support",
                                                    "2+ profitable keyword",]}
                                                button={<Button to='#' text='Purchase now' type={2}/>}/>
                                    <PriceBlock header="Standart" img="./devices.png" price="$149"
                                                list={["Push Notifications",
                                                    "Data Transfer",
                                                    "SQL Database",
                                                    "Search & SEO Analytics",
                                                    "24/7 Phone Support",
                                                    "2 months technical support",
                                                    "2+ profitable keyword",]}
                                                button={<Button to='#' text='Purchase now' type={2}/>}/>
                                    <PriceBlock header="Unlimited" img="./dashboard.png" price="$39"
                                                list={["Push Notifications",
                                                    "Data Transfer",
                                                    "SQL Database",
                                                    "Search & SEO Analytics",
                                                    "24/7 Phone Support",
                                                    "2 months technical support",
                                                    "2+ profitable keyword",]}
                                                button={<Button to='#' text='Purchase now' type={2}/>}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="footer-contactUs my-2 my-md-0">If you need custom services or Need more? <a href="#">Contact
                        us</a></p>
                </main>
            </div>

            <div className="footer">
                <img className="footer-bg" src="./footer.png" alt="footer-img"/>
                <img className="footer-bg footer-bg-image-mobile d-block d-sm-none" src="./footer.png"
                     alt="footer-img"/>

                <div className="block-container">
                    <label>
                        <input className="d-none d-sm-block email-input" placeholder="Enter your email" type="email"/>
                        <button className="d-none d-sm-block email-button">Subscribe</button>
                    </label>
                    <div className="copy row">
                        <h2 className="logo-text col-12 col-md-4">AppCo</h2>
                        <p className="desc col-12 col-md-4 my-2 my-md-0">All rights reserved by ThemeTags</p>
                        <p className="desc col-12 col-md-4">Copyrights © 2019. </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
