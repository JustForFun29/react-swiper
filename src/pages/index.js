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
import {slidesHouses, slidesTownHouse, slidesResidence, tabsHouses, tabsTownHouses, tabsResidence, partners} from "../data"
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
            <InfoSection {...homeObjTwo}/>
            <Channels/>
            <section id='tarifs'>
            <SwiperBlock slides={slidesHouses} tabs={tabsHouses} header='Для жителей частных домов' />
            <SwiperBlock slides={slidesTownHouse} tabs={tabsTownHouses} header='Для жителей таунхаусов' />
            <SwiperBlock slides={slidesResidence} tabs={tabsResidence} header='Для жителей жилых комплексов'/>
            </section>
            <Partners partners={partners}/>
            <Footer/>
        </>
    );
};

export default Home;
