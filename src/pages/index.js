import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection/Index";
import {homeObjOne, homeObjTwo} from "../components/InfoSection/Data";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing/Pricing";
import SwiperBlock from "../components/SwiperBlock";
import Channels from "../components/Channels";
import '../App.css'
import {slides, slides2, tabs, tabs2, partners} from "../data"
import Partners from "../components/Partners";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <Channels/>
            <section id='tarifs'>
                <SwiperBlock slides={slides} tabs={tabs} header='Изучите тарифы и цены' />
                <SwiperBlock slides={slides2} tabs={tabs2} header='Тарифы для таунхаусов'/>
            </section>
            <Partners partners={partners}/>
            <InfoSection {...homeObjTwo}/>
            <Footer/>
        </>
    );
};

export default Home;
