import React from "react";
import '../ProSubsVideoPage.css';
import Header from "../components/HomePage/HomePageSections/Header";
import VideosPage from "../VideosPage/Videospage";
import {RiLock2Line} from 'react-icons/ri';
import {GiSandsOfTime} from 'react-icons/gi';
import {TbAntennaBars5} from 'react-icons/tb';
import {MdOutlineLanguage} from 'react-icons/md';
import Footer from "../components/HomePage/HomePageSections/Footer";
import videoTest from '../Video/Berkshire Yoga Dance & Fitness - Promo Video.mp4'
// import { DefaultPlayer as Video } from "react-html5video/dist";
import 'react-html5video/dist/styles.css';

import  { useState, useRef } from 'react';
import ReactPlayer from 'react-player';


function ProSubsVideoPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const playerRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlayIconClick = () => {
    setIsPlaying(true);
    playerRef.current.getInternalPlayer().play();
  };

  const handleFullscreenChange = (event) => {
    setIsFullscreen(event.target.fullscreenElement !== null);
  };

  return (
    <div>
      <Header/>
      <section className="pro-video">
        <div className="pro-container">
          <ReactPlayer
            url={videoTest} 
            controls
            width={"100%"}
            height={"100%"}
            onPlay={handlePlay}
            onPause={handlePause}
            onFullscreenChange={handleFullscreenChange}
            ref={playerRef}
            // light='Images/yoga1.jpg'
          />

          {!isPlaying && !isFullscreen && (
            <div className="play-icon-container">
              <i
                className="fas fa-play play-icon"
                onClick={handlePlayIconClick}
              ></i>
            </div>
          )}
        </div>
      </section>
  







            <div className="pro-cours-video-info">
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
                {/* THIS THE VIDEO COMPONENT FOR THE INSCTRUCTOR ( PLUS VIDEO DU (NOM DU INSCTRUCTEUR)) */} 



            </div>
            


            <Footer/>
        </div>

  
    )
}


export default ProSubsVideoPage ;