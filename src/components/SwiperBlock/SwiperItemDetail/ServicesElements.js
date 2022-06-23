import styled, {keyframes} from 'styled-components';
import chekIcon from '../../../images/iconCheck.svg'
import {Button} from "../../ButtonElement";

const rotate = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const ItemDetailContainer = styled.div`
  position: relative;
  background-color: #fff;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 848px;
  margin: 0 auto;
  border-radius: 20px;
  animation: ${rotate} 0.4s linear;
  &::before {
    content: '';
    position: absolute;
    --triangle-size: 16px;
    display: block;
    top: -10px;
    left: 50%;
    width: 24px;
    height: 24px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    background-color: #fff;
  }
  @media (max-width: 960px) {
    padding: 20px;
  }
`;


export const ItemDetailImg = styled.div`
  width: 205px;
  height: 205px;
  flex-basis: 205px;
  border-radius: 100px;
  img {
    border-radius: 100px;
    width: 205px;
    height: 205px;
  }
  @media (max-width: 960px) {
    display: none;
  }
`;


export const ItemDetailContent = styled.div`
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 960px) {
    margin-right: 0px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ItemDetailList = styled.div`
  margin-right: 56px;
  flex-basis: 300px;
 
  @media (max-width: 960px) {
    flex-basis: auto;
    margin-bottom: 25px;
    margin-right: 0px;
  }
`;

export const ItemDetailSubtitle = styled.div`
  width: content-box;
  font-weight: 700;
  margin-bottom: 18px;
`;

export const ItemDetailUl = styled.ul`

`;

export const ItemDetailLi = styled.li`
  list-style-type: none;
  position: relative;
  padding-left: 25px;
  margin-bottom: 15px;
  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 4px;
    width: 15px;
    height: 15px;
    background-image: url("${chekIcon}");
  }
  
`;


export const ItemDetailGateway = styled.div`
  display: flex;
  background-color: #f5f5f7;
  padding: 16px 24px;
  border-radius: 10px;
`;


export const GatewayImg = styled.img`
  width: 64px;
  height: 64px;
  
`;


export const GatewayTitle = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
    
`;
export const GatewayPrice = styled.div`
  font-weight: bold;
`;

