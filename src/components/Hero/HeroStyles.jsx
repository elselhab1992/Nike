import styled from "styled-components";
import ButtonsStyles from "../Buttons/ButtonsStyles";

const HeroSection = styled.section`
  background-image: linear-gradient(
    0.2deg,
    rgba(40, 173, 222, 1) 4.8%,
    rgb(27, 76, 224) 85.5%
  );
  padding-top: 100px;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  line-height: 1;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fontWeights.bolder};
`;

const HeroBtn = styled(ButtonsStyles)`
  width: 180px;
  font-weight: 600;
  font-size: 16px;
  padding: 7px;
  margin-top: 1rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 100%;
`;

const Videos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin: auto;
`;

const ImgDiv = styled.div`
  width: 55%;
  margin: auto;
`;

const Img = styled.img`
  margin-top: 2rem;
  transform: rotate(-25deg);
  transition: 700ms;

  &:hover {
    cursor: pointer;
    transform: rotate(0);
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  margin-right: 3rem;
`;

const Icon = styled.img`
  width: 30px;
  transition: 700ms;

  &:hover {
    cursor: pointer;
    scale: 1.2;
  }
`;

export {
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
};
