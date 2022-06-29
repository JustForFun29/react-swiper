import React from 'react';
import {
    MobileSwiper,
    PartnersInner,
    PartnersItem,
    PartnersItemImg,
    PartnersItemText,
    PartnersTitle,
    PartnersWrapper
} from "./NavbarElements";
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination} from "swiper";

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
            <MobileSwiper>
                <Swiper
                    slidesPerView={3}
                    grid={{
                        rows: 1,
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        460: {
                            slidesPerView: 2,
                        },
                        630: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {partners.map(partner =>
                        <SwiperSlide>
                            <PartnersItem key={partner.id}>
                                <PartnersItemImg src={partner.img} alt=""/>
                                <PartnersItemText>{partner.title}</PartnersItemText>
                            </PartnersItem>
                        </SwiperSlide>
                    )}
                </Swiper>
            </MobileSwiper>
        </PartnersWrapper>
    );
};

export default Partners;