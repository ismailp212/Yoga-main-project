import React from "react";
import '../Instructeurs.css';
import Header from "../components/HomePage/HomePageSections/Header";
import Footer from '../components/HomePage/HomePageSections/Footer';
import { Link } from "react-router-dom";





function Instructeurs(props) {
    const persons = [
        { name: "amani missa", image: "Instructeurs-Images/in1.png" },
        { name: "Jane lampard", image: "Instructeurs-Images/ins2.png" },
        { name: "Serena Darwin", image: "Instructeurs-Images/ins3.jpg" },
        { name: "Nicol adams", image: "Instructeurs-Images/ins5.jpg" },
        { name: "kingsle coman", image: "Instructeurs-Images/ins6.png" },
        { name: "anny leonhart", image: "Instructeurs-Images/ins7.jpg" },
        { name: "Hanji kim", image: "Instructeurs-Images/ins8.jpg" },
        { name: "Leonardo Vicci", image: "Instructeurs-Images/ins9.jpg" },
        { name: "John petter", image: "Instructeurs-Images/ins10.png" },
        { name: "maria suarez", image: "Instructeurs-Images/instr11.png" },
        { name: "Mark pedri", image: "Instructeurs-Images/instr12.png" },
        { name: "Ney Junior", image: "Instructeurs-Images/instr13.png" },
        { name: "leo scaloni", image: "Instructeurs-Images/instr14.jpg" },
        { name: "bruce lee", image: "Instructeurs-Images/instr16.jpg" },

      ];
    
      return (
        <div>
            <Header/>
        <div className="Instru-container">
          <div className="instru-text">  
            <h1>Nos instructeurs</h1>
            <p><i>Élever votre pratique avec des instructeurs de yoga passionnés et compétents!</i></p>
          </div>
          <div className="instru-profies-container">
            {persons.map((e, i) => {
                    return (
                        
                        <div className="instru-profiles" key={i}>
                            <a href="#profile">
                                <img src={e.image} alt={e.name} /><br />
                                <p>{e.name}</p>
                            </a>    
                        </div>
                    )
            }

        )
    }
          </div>
        </div>
        <Footer/>
     </div>
      );
}

export default Instructeurs ;