import React from 'react';
import {
    PartnersInner,
    PartnersItem,
    PartnersItemImg,
    PartnersItemText,
    PartnersTitle,
    PartnersWrapper
} from "./NavbarElements";

const Partners = ({partners}) => {
    return (
        <PartnersWrapper>
            <PartnersTitle>
                Наши Партнеры
            </PartnersTitle>
            <PartnersInner>
                {partners.map(partner =>
                    <PartnersItem key={partner.id}>
                        <PartnersItemImg src={partner.img} alt=""/>
                        <PartnersItemText>{partner.title}</PartnersItemText>
                    </PartnersItem>
                )}
            </PartnersInner>
        </PartnersWrapper>
    );
};

export default Partners;