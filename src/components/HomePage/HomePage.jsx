import React from 'react';
import Header from './HomePageSections/Header';
import VideoSection from './HomePageSections/VideoSection';
import MouvSection from './HomePageSections/MouvSection';
import CourSection from './HomePageSections/CourSection';
import InstruSection from './HomePageSections/InstruSection';
import PackSection from './HomePageSections/PackSection';
import Footer from './HomePageSections/Footer';




function HomePage(props){
    return(
    <div>
        <Header/>
        <VideoSection/>
        <MouvSection/>
        <CourSection/>
        <InstruSection/>
        <PackSection/>
        <Footer/>
    </div>
    )
}


export default HomePage ;