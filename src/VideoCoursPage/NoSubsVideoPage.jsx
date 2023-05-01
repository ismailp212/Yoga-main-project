import React from "react";
import '../NoSubsVideoPage.css';
import Header from "../components/HomePage/HomePageSections/Header";
import VideosPage from "../VideosPage/Videospage";
import {RiLock2Line} from 'react-icons/ri';
import {GiSandsOfTime} from 'react-icons/gi';
import {TbAntennaBars5} from 'react-icons/tb';
import {MdOutlineLanguage} from 'react-icons/md';
import Footer from "../components/HomePage/HomePageSections/Footer";


function NoSubsVideoPage(props){
    return(

        <div>
            <Header/>
            <div className="seed-cont">
                <div className="overlay2"></div>
            <img src="/Images/hatha-yoga-e-elly-fairytale-211020-1280x720-1.avif" alt="" />
            <div className="start-now">
                <div className="lock-icon">
                    <RiLock2Line />
                </div>
            <h1>POUR DÉBLOQUEZ CETTE CLASSE</h1>
            <a href="">Commencez votre essai gratuit aujourd'hui <hr /></a>
            </div>
            </div>
            <div className="cours-video-info">
                <h1>yoga pour les debutants ( titre du video )</h1>
                <div className="descrip-cours">
                    <hr /><br />
                    <p>Vous avez des douleurs lombaires ? Ouvrez de l'espace dans cette zone en relâchant votre colonne 
                        vertébrale, vos hanches et vos ischio-jambiers dans ce cours de Hatha Yoga de 20 minutes. Vous 
                        créerez de la stabilité et soulagerez la pression dans le bas du dos avec des mouvements comme 
                        Triangle Pose, Pigeon Pose et de nombreux plis vers l'avant.
                    </p>
                 </div>
                <div className="cours-video-instru-info">
                    <a href="">
                        <img src="Images/pr1.jpg" alt="" />
                        <h2 className="video-instru-name">Tasha Rodriguez</h2>
                        </a> 
                        <p className="video-instru-specia">Yoga Instructeur</p>
                        <button className="consultation-btn">Prendre consultation</button>
                </div>
                <div className="apercu-video-page">
                    <p>Aperçu</p><br /><hr style={{"width":"50%" , "transform":"translate(50%)"}}/>
                    
                    <table>
                         <thead> 
                            <tr>
                                <td><GiSandsOfTime/> Duration</td>
                                <td><TbAntennaBars5/> Niveau</td>
                                <td><MdOutlineLanguage/> Language</td>                              
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10min 22sec</td>
                                <td>Débutant</td>
                                <td>Français</td>
                            </tr>                             
                        </tbody> 
                    </table>
                </div>
            </div>
            <div className="more-videos-instru">

                <h2>plus de cours de tasha</h2>
                <VideosPage />



            </div>
            



        </div>


    )
}


export default NoSubsVideoPage ;