import React, {useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import "swiper/css/effect-coverflow";

// import required modules
import {Controller, Navigation} from "swiper";
import SwiperItem from "./SwiperItem";
import {SwiperContainer, SwiperInner, SwiperTitle, SwiperWrapper,TabsContainer} from "./ServicesElements";
import SwiperButton from "./SwipreButton";
import SwiperItemDetail from "./SwiperItemDetail";
import styled from "styled-components";




export default function App({slides, tabs, header}) {
    const [swiperControlled, setSwiperControlled] = useState()
    const [activePrice, setActivePrice] = useState(1)
    const isEnd = slides.length === activePrice
    const isStart = activePrice === 1

    const activeSlideHandler = (id) => {
        swiperControlled.slideTo(id)
    }

    return (
        <SwiperContainer>
            <SwiperTitle>
                {header}
            </SwiperTitle>
            <SwiperWrapper>
                <SwiperInner>
                    <div>
                        <SwiperButton
                            isEnd={isEnd}
                            isStart={isStart}
                            swiperItem={swiperControlled}
                            prev
                        />
                        <SwiperButton
                            isEnd={isEnd}
                            isStart={isStart}
                            swiperItem={swiperControlled}
                            next
                        />
                    </div>
                    <div>
                        <Swiper
                            // watchSlidesProgress={true}
                            shadowPerProgress={true}
                            onSwiper={setSwiperControlled}
                            controller={{control: swiperControlled}}
                            centeredSlides={true}
                            initialSlide={1}
                            slidesPerView={'auto'}
                            spaceBetween={30}
                            effect={"coverflow"}
                            speed={600}
                            simulateTouch={false}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 1000,
                                modifier: 0,
                                slideShadows: true,
                            }}
                            modules={[Navigation, Controller]}
                            className="mySwiper"
                        >
                            {slides.map(item =>
                                <SwiperSlide
                                    key={item.id}
                                    style={{
                                        width: '250px',
                                        borderRadius: "10px"
                                    }}
                                >
                                    {({isActive}) => (
                                        <SwiperItem
                                            onChange={activeSlideHandler}
                                            setActivePrice={setActivePrice}
                                            isActive={isActive}
                                            {...item}
                                        />
                                    )}
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </SwiperInner>

                <TabsContainer>
                    {tabs.map(tab => {
                        const activeTab = activePrice === tab.slidesId
                        return (
                            activeTab && <SwiperItemDetail
                                active={activeTab}
                                key={tab.id}
                                {...tab}
                            />
                        )
                    })}
                </TabsContainer>
            </SwiperWrapper>
            
        </SwiperContainer>
    );
}