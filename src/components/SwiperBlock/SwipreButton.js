import React from "react";
import styled, {css} from "styled-components";
import arrow from '../../images/arrow2.svg'

const StyledSlideButton = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 25px;
  border: 0;
  background-color: #fff;
  color: white;

  background-image: url(${arrow});
  background-position: left 50% top 50%;
  background-repeat: no-repeat;
  background-size: 10px;
  box-shadow: 0 16px 16px -8px lightgray;
  z-index: 999;
  cursor: pointer;
  top: 50%;
  ${props => props.next && css`
    opacity: ${props => props.isEnd ? 0.4 : 1};
    cursor: auto;
    transform: rotate(0deg) translateY(-50%);
    right: -60px;
    @media (max-width: 768px) {
      right: -8px;
    }
    @media (max-width: 372px) {
      width: 28px;
      height: 28px;
      background-size: 7px;
    }
  `};
  ${props => props.prev && css`
    opacity: ${props => props.isStart ? 0.4 : 1};
    cursor: auto;
    box-shadow: 0 -16px 16px -8px lightgray;
    transform: rotate(180deg) translateY(50%);
    left: -60px;
    @media (max-width: 768px) {
      left: 0;
    }
    @media (max-width: 372px) {
      width: 28px;
      height: 28px;
      background-size: 7px;
    }
  `}
`
const SwiperButton = (props) => {
    return (
        <StyledSlideButton
            className={`${props.prev ? ".pagination_prev" : '.pagination_next'}`}
            {...props}
            onClick={() => props.next ? props.swiperItem.slideNext() : props.swiperItem.slidePrev()}
        />
    );
}

export default SwiperButton