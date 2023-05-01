import React from "react";
import '/Users/___ISMAIL___/Desktop/react-first-test/src/Styles/HomePageStyles/InstruSection.css';
import { useRef } from 'react';





const InstruSection = () => {
    const productContainerRef = useRef(null);
    const nxtBtnRef = useRef(null);
    const preBtnRef = useRef(null);

    const handleNextButtonClick = () => {
        const containerWidth = productContainerRef.current.getBoundingClientRect().width;
        productContainerRef.current.scrollLeft += containerWidth;
    }

    const handlePrevButtonClick = () => {
        const containerWidth = productContainerRef.current.getBoundingClientRect().width;
        productContainerRef.current.scrollLeft -= containerWidth;
    }
    return(
        <div className="instru-div">
            <section className="prof">
                <h1 className="prof-category">Rencontrer nos Instructeurs</h1>
                <h2 className="subtitle">
                Renforcez vos capacités. Faites bouger votre corps. Respirez lentement.
                Notre équipe d'instructeurs d'élite vous fournira les outils dont vous
                avez besoin pour développer et atteindre tous vos objectifs de mise en
                forme et de bien-être.
                </h2>
                <a className="prof-cta" href="#">
                <button>Rencontrez nos instructeurs</button>
                </a>
                <button className="pre-btn" ref={preBtnRef} onClick={handlePrevButtonClick}>
                <img src="Images/arrow.png" alt="" />
                </button>
                <button className="nxt-btn" ref={nxtBtnRef} onClick={handleNextButtonClick}>
                <img src="Images/arrow.png" alt="" />
                </button>
                <div className="prof-container" ref={productContainerRef}>
                <div className="prof-card">
                    <div className="prof-image">
                    <img src="Images/pr1.jpg" className="prof-thumb" alt="" />
                    </div>
                    <div className="prof-info">
                    <h2 className="prof-name">Anny Leonhart</h2>
                    <p className="prof-short-description">Yoga Instructeurs</p>
                    </div>
                </div>
                <div className="prof-card">
                    <div className="prof-image">
                    <img src="Images/pr2.jpg" className="prof-thumb" alt="" />
                    </div>
                    <div className="prof-info">
                    <h2 className="prof-name">Mikasa Aker </h2>
                    <p className="prof-short-description">Sophrologie Instructeurs</p>
                    </div>
                </div>
                <div className="prof-card">
                    <div className="prof-image">
                    <img src="Images/pr3.jpg" className="prof-thumb" alt="" />
                    </div>
                    <div className="prof-info">
                    <h2 className="prof-name">Historia Ress</h2>
                    <p className="prof-short-description">Yoga Instructeurs</p>
                    </div>
                </div>
                <div className="prof-card">
                    <div className="prof-image">
                    <img src="Images/pr4.jpg" className="prof-thumb" alt="" />
                    </div>
                    <div className="prof-info">
                    <h2 className="prof-name">Kylian Mbappe</h2>
                    <p className="prof-short-description">Power-Yoga Instructeurs</p>
                    </div>
                </div>
                <div className="prof-card">
                    <div className="prof-image">
                    <img src="Images/pr5.jpg" className="prof-thumb" alt="" />
                    </div>
                    <div className="prof-info">
                    <h2 className="prof-name">Tasha Rodriguez</h2>
                    <p className="prof-short-description">Dance-Flow Instructeurs</p>
                    </div>
                </div>
                <div className="prof-card">
                    <div className="prof-image">
                    <img src="Images/pr6.jpg" className="prof-thumb" alt="" />
                    </div>
                    <div className="prof-info">
                    <h2 className="prof-name">Serena Waterson</h2>
                    <p className="prof-short-description">Yin Instructeurs</p>
                    </div>
                </div>
                </div>
            </section>
        </div>



    )
}


export default InstruSection ;