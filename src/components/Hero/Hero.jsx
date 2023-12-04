// import React from 'react'

import heroImg from "../../assets/hero.png";
import Clips from "../Clips/Clips";
import { useGlobalContext } from "../Context/Context";
import {
  HeroSection,
  Heading,
  Title,
  HeroBtn,
  Container,
  Videos,
  Icons,
  ImgDiv,
  Img,
  Icon,
} from "./HeroStyles";

const Hero = () => {
  const { hero } = useGlobalContext();

  return (
    <HeroSection>
      <Heading>
        <Title>Play With Electric Nike</Title>
        <Title>Adapt 2.0 Sneakers</Title>
        <HeroBtn>explore products</HeroBtn>
      </Heading>
      <Container>
        <Videos>
          <Clips />
        </Videos>
        <ImgDiv>
          <Img src={heroImg} alt="shoes" />
        </ImgDiv>
        <Icons>
          {hero.sociallinks.map((icons, index) => {
            const { icon } = icons;

            return <Icon src={icon} alt="icon" key={index} />;
          })}
        </Icons>
      </Container>
    </HeroSection>
  );
};

export default Hero;
