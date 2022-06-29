import styled from 'styled-components';
import {SwiperSlide} from "swiper/react";

export const SwiperContainer = styled.div`
  padding: 64px 0;
  margin: 0 auto;
  background-color: #f5f5f7;
`;

export const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1300px;
  padding: 10px 65px;
  margin-left: auto;
  margin-right: auto;
  //padding-top: 10px;
  margin-top: -10px;
  z-index: 1;
  &::after {
    position: absolute;
    height: 320px;
    left: 0;
    top: 37px;
    width: 100%;
    max-width: 1350px;
    content: '';
    z-index: 3;
    pointer-events: none;
    background-image: linear-gradient(90deg,#f6f6f9 5%,rgba(246,246,249,0) 15%,rgba(246,246,249,0) 85%,#f6f6f9 95%);
    @media (max-width: 960px) {
      linear-gradient(90deg,#f6f6f9 5%,rgba(246,246,249,0) 15%,rgba(246,246,249,0) 85%,#f6f6f9 95%);
    }
  }
  @media (max-width: 768px) {
    padding: 10px
  }
`

export const SwiperInner = styled.div`
  padding: 20px 0 0 0;
  position: relative;
  min-height: 324px;
`;


export const SwiperTitle = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  @media (max-width: 480px) {
    font-size: 32px;
  }
`;



// Swiper Item

export const SwiperSlideInner = styled(SwiperSlide)`
  border-radius: 10px;
  box-shadow: 0 16px 16px -8px gray;
  //margin: 10px;
`

export const SwiperItemInner = styled.div`
  cursor: pointer;
  border: 2px solid;
  border-color: ${props => props.active ? '#C92C7B' : "white"};
  box-shadow: ${props => props.active ? '0 16px 16px -8px gray' : "none"};
  border-radius: 10px;
  padding: 15px 10px;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  background: #fff;
  height: 284px;
  transition: all 0.6s;
`

export const SwiperItemPrice = styled.div`
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 10px;
`

export const SwiperItemPriceUnits = styled.div`
  margin-bottom: 30px;
  font-weight: 700;

`
export const SwiperItemText = styled.div`
  opacity: ${props => props.visible ? 1 : 0};
  transition: all 0.6s;
`

export const TabsContainer = styled.div`
  min-height: 500px;
  @media (max-width: 455px) {
    min-height: 580px;
  }
`


