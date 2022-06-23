import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {Button} from '../ButtonElement'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Интернет в каждом доме</HeroH1>
        <HeroP>
          На сегодняшний день мы активно работаем с крупнейшими застройщиками
          Алматы и Нур-султана по предоставлению
          качественных услуг
        </HeroP>
        <HeroBtnWrapper>
          <Button to="tarifs" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
            Начнем! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
