import styled from "styled-components";
import bg from "../../images/partners/Фон.png"

export const PartnersWrapper = styled.section`
  padding: 90px 0;
  margin: 0 auto;
  background-image: url("${bg}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const PartnersInner = styled.div`
  max-width: 1100px;
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: auto;
  list-style: none;
  justify-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const PartnersTitle = styled.h3`
  text-align: center;
  margin-bottom: 40px;
  color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700;
  max-width: 400px;
  @media (max-width: 480px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;
export const PartnersItem = styled.div`
  position: relative;
  height: 200px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 460px) {
    height: 220px;
  }
`;

export const PartnersItemImg = styled.img`
  width: 150px;
  height: 90px;
  object-fit: contain;
  @media (max-width: 460px) {
    width: 200px;
  }
`;

export const PartnersItemText = styled.p`
  width: 100%;
  margin-top: 10px;
  margin-left: 10px;
  //position: absolute;
  left: 0;
  top: 130px;
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 460px) {
    font-size: 20px;
  }
`;

export const MobileSwiper = styled.div`
  padding: 0 15px;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
