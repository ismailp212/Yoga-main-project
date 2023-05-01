import React from "react";
import '/Users/___ISMAIL___/Desktop/react-first-test/src/Styles/HomePageStyles/MouvSection.css';



function MouvSection(props){

    return(
        <section className="mouvs" id="mouvs">
            <h1 className="title">IDENTIFIEZ CE QUI VOUS MOUVE</h1>
            <h2 className="subtitle">
                Avec des milliers de cours pour le corps et l'esprit, vous pouvez vivre
                toute l'expérience du studio à la maison, que vous soyez un débutant absolu
                ou que vous souhaitiez faire progresser votre routine.
            </h2>
            <div className="content">
                <div className="mouv-card">
                <div className="mouv-image">
                    <img src="/Images/yoga.webp" />
                </div>
                <div className="mouv-title">
                    <p className="mouv-category">YOGA CLASSES</p>
                    <strong className="mouv-info">
                    <span>
                        Transformez votre corps et votre esprit avec la pratique du yoga
                    </span>
                    </strong>
                </div>
                </div>
                <div className="mouv-card">
                <div className="mouv-image">
                    <img src="/Images/sophrol.webp" />
                </div>
                <div className="mouv-title">
                    <p className="mouv-category">SOPHROLOGIE</p>
                    <strong className="mouv-info">
                    <span>
                        Débloquez la paix intérieure et l'harmonie la sophrologie
                        transformatrices
                    </span>
                    </strong>
                </div>
                </div>
                <div className="mouv-card">
                <div className="mouv-image">
                    <img src="/Images/terapi.jpg" />
                </div>
                <div className="mouv-title">
                    <p className="mouv-category">YOGA THERAPIE</p>
                    <strong className="mouv-info">
                    <span>
                        Pratiquer la thérapie du yoga et améliorer votre bien-être dès
                        maintenant!
                    </span>
                    </strong>
                </div>
                </div>
                <div className="mouv-card">
                <div className="mouv-image">
                    <img src="/Images/Power-Yoga.jpg" />
                </div>
                <div className="mouv-title">
                    <p className="mouv-category">YOGA POWER</p>
                    <strong className="mouv-info">
                    <span>
                        Yoga pour libérer la puissance de votre corps et de votre esprit
                    </span>
                    </strong>
                </div>
                </div>
            </div>
        </section>

    )
}


export default MouvSection ;