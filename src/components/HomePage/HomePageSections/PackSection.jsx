import React from "react";
import '/Users/___ISMAIL___/Desktop/react-first-test/src/Styles/HomePageStyles/PackSection.css';



function PackSection(props){
    return(

        <div>
            <section className="pack" />
            <div className="pack-text">
            <h1>Abonnez-vous maintenant à nos offres</h1>
            <p>
                Améliorez votre santé physique et mentale avec nos cours de yoga et
                rejoignez notre communauté de passionnés de yoga et commencez votre
                parcours de bien-être dès aujourd'hui en vous abonnant à nos offres de
                cours.
            </p>
            <a className="pack-cta" href="#">
                <button>DÉCOUVREZ NOS PACKS</button>
            </a>
            </div>
        </div>
    )
}


export default PackSection ;