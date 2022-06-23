import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection/Index";
import {homeObjOne, homeObjTwo} from "../components/InfoSection/Data";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing/Pricing";
import SwiperBlock from "../components/SwiperBlock";

const slides = [
    {id: 1, color: '#fcba03', speed: 50, units: "Mbps"},
    {id: 2, color: '#03fc0b', speed: 100, units: "Mbps"},
    {id: 3, color: '#03fceb', speed: 300, units: "Mbps"}
]
const slides2 = [
    {id: 1, color: '#fcba03', speed: 50, units: "Mbps"},
    {id: 2, color: '#03fc0b', speed: 100, units: "Mbps"},
    {id: 3, color: '#03fceb', speed: 200, units: "Mbps"},
    {id: 4, color: '#032cfc', speed: 500, units: "Mbps"},
]

const slides3 = [
    {id: 1, color: '#fcba03', speed: 50, units: "Mbps"},
    {id: 2, color: '#03fc0b', speed: 100, units: "Mbps"},
    {id: 3, color: '#03fceb', speed: 300, units: "Mbps"},
    {id: 4, color: '#032cfc', speed: 600, units: "Mbps"},
    {id: 5, color: '#fc03ca', speed: 900, units: "Mbps"},
    {id: 6, color: '#fc0303', speed: 1200, units: "Mbps"},
]

const tabs = [
    {
        id: 1,
        slidesId: 1,
        img: "https://assets.xfinity.com/assets/dotcom/projects/cix-1976-learn-july-launch/LS_HSD_Prospect_SpeedTile_Speed50_Desktop_2x.jpg",
        list: ['До 4 девайсов', "Трафик безлимитный", "Загрузка музыки и фото", "Видео звонков"],
        speed: 50
    },
    {
        id: 2,
        slidesId: 2,
        img: "https://assets.xfinity.com/assets/dotcom/projects/cix-1976-learn-july-launch/LS_HSD_Prospect_SpeedTile_Speed100_Desktop_2x.jpg",
        list: ['До 5 девайсов', "Трафик безлимитный", "Загрузка музыки и фото", "Видео звонков"],
        speed: 100
    },
    {
        id: 3,
        slidesId: 3,
        img: "https://assets.xfinity.com/assets/dotcom/projects/cix-1976-learn-july-launch/LS_HSD_Prospect_SpeedTile_Speed200_Desktop_2x.jpg",
        list: ['До 8 девайсов', "Трафик безлимитный", "Загрузка больших файлов", "Видео звонков"],
        speed: 200
    }
]

const tabs2 = [
    {
        id: 1,
        slidesId: 1,
        img: "https://assets.xfinity.com/assets/dotcom/projects/cix-1976-learn-july-launch/LS_HSD_Prospect_SpeedTile_Speed50_Desktop_2x.jpg",
        list: ['До 4 девайсов', "Трафик безлимитный", "Загрузка музыки и фото", "Видео звонков"],
        speed: 50
    },
    {
        id: 2,
        slidesId: 2,
        img: "https://assets.xfinity.com/assets/dotcom/projects/cix-1976-learn-july-launch/LS_HSD_Prospect_SpeedTile_Speed100_Desktop_2x.jpg",
        list: ['До 5 девайсов', "Трафик безлимитный", "Загрузка музыки и фото", "Видео звонков"],
        speed: 100
    },
    {
        id: 3,
        slidesId: 3,
        img: "https://assets.xfinity.com/assets/dotcom/projects/cix-1976-learn-july-launch/LS_HSD_Prospect_SpeedTile_Speed200_Desktop_2x.jpg",
        list: ['До 8 девайсов', "Трафик безлимитный", "Загрузка больших файлов", "Видео звонков"],
        speed: 200
    },
    {
        id: 4,
        slidesId: 4,
        img: "https://assets.xfinity.com/assets/dotcom/projects/cix-1976-learn-july-launch/LS_HSD_Prospect_SpeedTile_Speed200_Desktop_2x.jpg",
        list: ['До 12+ девайсов', "Трафик безлимитный", "Загрузка больших файлов", "Онлайн игр"],
        speed: 500
    }
]

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
            <SwiperBlock slides={slides} tabs={tabs} header='Изучите тарифы и цены' />
            <SwiperBlock slides={slides2} tabs={tabs2} header='Тарифы для таунхаусов'/>
            <InfoSection {...homeObjTwo}/>
            <Footer/>
        </>
    );
};

export default Home;
