import React from "react";
import Header from "../components/HomePage/HomePageSections/Header";
import '../Profiles.css' ;
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram} from 'react-icons/ai';
import {RiGlobalLine} from 'react-icons/ri';
import Footer from '../components/HomePage/HomePageSections/Footer';
import VideosPage from "../VideosPage/Videospage";



function Profies(props){

    return(

        <div>
            <Header/>
            <div className="coverlay"></div>
            <div className="instru-cover-img">
                
             <img src="/Instru-covers/cover 2.webp"/>
                <h1>Leonardo Vicci</h1>
                    <div className="instru-social-media">
                        <ul>
                            <li><a href=""><BsFacebook/></a></li>
                            <li><a href=""><AiFillInstagram/></a></li>
                            <li><a href =""><RiGlobalLine/></a></li>
                        </ul>  
                    </div>
            </div>
            <div className="image-profile">
                <img src="Instructeurs-Images/ins9.jpg"/>
            </div>
            <button className="consultation-btn2">Prendre consultation</button>
            <div className="instru-description">
                <p>
                    
                    Leonardo Vicci is motivation, positivity, and energy personified. With over 20 years of experience, Kupah travels the globe as a celebrity trainer, 
                    fitness concierge, and DJ. He is the creator of BodyWeight BootKAMP in Los Angeles, 
                    an outdoor beach workout for all levels. Kupah and Alo joined forces for 
                    the incredible and unique Alo In the Wild series and he continues to create signature programs for Alo Moves.

                    Originally from Boston, 
                    Kupah began his fitness career by teaching an aerobic dance class that spanned over 10 years and became a local phenomenon. He has since expanded to specialize in HIIT, boxing, strength and conditioning, mobility, and more.

                    Kupah makes working out fun with an endless supply 
                    of uplifting energy and motivation. He promotes hard work, dedication, and resilience in workouts, believing we all have the potential to control our own narrative and make moves on and off the mat.
                    His goal is to help people feel successful, empowered, and confident after each and every workout.

                </p>
            </div>
            <div className="instru-videos">
                <h1>Les cours du (Leonardo)</h1>
                <VideosPage/>
            </div>
           <Footer/> 
        
        </div>
    )
}

export default Profies ;