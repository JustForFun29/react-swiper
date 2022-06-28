import styled from "styled-components";
import bg from "../../images/partners/Фон.png"

export const PartnersWrapper = styled.section`
  padding: 90px 0;
  background-image: url("${bg}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const PartnersInner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
  
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
    margin-bottom: 50px;
  }
`;
export const PartnersItem = styled.div`
  position: relative;
  height: 200px;
  color: #ffffff;
`;

export const PartnersItemImg = styled.img`
  width: 150px;
`;

export const PartnersItemText = styled.p`
  width: 100%;
  position: absolute;
  left: 23px;
  top: 108px;
`;
