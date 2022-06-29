import React from 'react';

import {useEffect} from "react";
import {SwiperItemInner, SwiperItemPrice, SwiperItemPriceUnits, SwiperItemText} from "./ServicesElements";


const SwiperItem = ({color, speed, isActive, id, setActivePrice, onChange, units}) => {

    useEffect(() => {
        if (isActive) {
            setActivePrice(id)
        }
    }, [isActive])

    return (
        <SwiperItemInner active={isActive} onClick={() => onChange(id - 1)}>
            <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M16.5 12.5C16.7761 12.5 17 12.7239 17 13V27C17 27.2761 16.7761 27.5 16.5 27.5C16.2239 27.5 16 27.2761 16 27V13C16 12.7239 16.2239 12.5 16.5 12.5ZM24.5 12.5C24.7761 12.5 25 12.7239 25 13V26C25 26.2761 24.7761 26.5 24.5 26.5C24.2239 26.5 24 26.2761 24 26V13C24 12.7239 24.2239 12.5 24.5 12.5ZM20.5 16C20.7761 16 21 16.2239 21 16.5V23.5C21 23.7761 20.7761 24 20.5 24C20.2239 24 20 23.7761 20 23.5V16.5C20 16.2239 20.2239 16 20.5 16ZM12.5 18C12.7761 18 13 18.2239 13 18.5V21.5C13 21.7761 12.7761 22 12.5 22C12.2239 22 12 21.7761 12 21.5V18.5C12 18.2239 12.2239 18 12.5 18ZM28.5 18C28.7761 18 29 18.2239 29 18.5V21.5C29 21.7761 28.7761 22 28.5 22C28.2239 22 28 21.7761 28 21.5V18.5C28 18.2239 28.2239 18 28.5 18Z"
                      fill={color}/>
            </svg>
            <SwiperItemPrice>{speed}</SwiperItemPrice>
            <SwiperItemPriceUnits>{units}</SwiperItemPriceUnits>
            <SwiperItemText visible={isActive}>Проверьте наличие по стартовой цене</SwiperItemText>
        </SwiperItemInner>
    );
};

export default SwiperItem;