import styled from "styled-components";
import { SecondaryButton } from "../Buttons/ButtonsStyles";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 1rem 5rem;
  margin: auto;
  justify-content: center;
  align-items: center;

  & > :nth-child(1) {
    background-color: #425af5;
  }

  & > :nth-child(2) {
    background-color: #0da851;
  }

  & > :nth-child(3) {
    background-color: #f24949;
  }

  & > :nth-child(4) {
    background-color: #cf7a0c;
  }

  & > :nth-child(5) {
    background-color: #75480e;
  }

  & > :nth-child(6) {
    background-color: #3c93d6;
  }

  & > :nth-child(7) {
    background-color: #e3a922;
  }

  & > :nth-child(8) {
    background-color: #ad671d;
  }

  & > :nth-child(9) {
    background-color: #183da1;
  }

  & > :nth-child(10) {
    background-color: #1ac208;
  }

  & > :nth-child(11) {
    background-color: #0b0f29;
  }

  & > :nth-child(12) {
    background-color: #2f3fa8;
  }

  @media (min-width: 300px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 0 5rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 1rem 5rem;
  }
`;

const Items = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  transition: 700ms;
  background-color: red;

  &:hover {
    scale: 1.1;
  }

  @media (min-width: 300px) {
    &:hover {
      scale: 1;
    }
  }

  @media (min-width: 768px) {
    &:hover {
      scale: 1.1;
    }
  }
`;

const Imgs = styled.img`
  width: 230px;
  transform: rotate(0);
  transition: 700ms;

  &:hover {
    cursor: pointer;
    transform: rotate(-15deg);
  }
`;

const ItemsInfo = styled.div`
  padding: 1rem;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
`;

const ItemsTitle = styled.h4`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.7rem;
  margin: 0.5rem auto;
`;

const Prices = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  background-color: #dbd6d6;
  color: ${(props) => props.theme.colors.black};
  padding: 0 5px;
  border-radius: 5px;
`;

const Ratings = styled.p`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Bag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Button = styled(SecondaryButton)`
  width: 80px;
  padding: 5px;
  box-shadow: none;
  border-radius: 5px;
  position: relative;
  z-index: 1;
`;

export {
  Container,
  Items,
  Imgs,
  ItemsInfo,
  ItemsTitle,
  Price,
  Prices,
  Ratings,
  Button,
  Bag,
};
