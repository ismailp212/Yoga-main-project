import React from "react";
import '/Users/___ISMAIL___/Desktop/react-first-test/src/Styles/HomePageStyles/CourSection.css';





function CourSection(props){
    return(
    <div className="cour-container">        
        <section className="cour" />
        <div className="cour-text">
            <h1>Trouvez l'harmonie intérieure</h1>
            <p>
            Découvrez les bienfaits de la pratique du yoga pour le corps et l'esprit
            sur notre site dédié à cette discipline millénaire. Que vous soyez
            débutant ou pratiquant confirmé, nous vous accompagnons dans votre
            cheminement pour atteindre une harmonie totale entre votre corps et votre
            esprit.
            </p>
            <a className="cour-cta" href="#">
            <button>Explorer les cours</button>
            </a>
        </div>

    </div>

    )

}

export default CourSection ;