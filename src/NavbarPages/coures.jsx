import React from "react";
import Header from "../components/HomePage/HomePageSections/Header";
import DisciplineHeader from "../components/DisciplineHeader";
import FilterButton from "../components/FilterButton";
import VideosComponent from "../components/VideosComponent";
import Footer from "../components/HomePage/HomePageSections/Footer";

function Coures(props){
    return(

        <div>
            <Header/>
            <DisciplineHeader/>
            <FilterButton/>
            <VideosComponent/>
            <Footer/>
        </div>



    )
}


export default Coures ;