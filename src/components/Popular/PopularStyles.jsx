import styled from "styled-components";
import ButtonsStyles from "../Buttons/ButtonsStyles";

const Heading = styled.div`
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 3rem;
  margin-left: 5rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.2rem;
  padding: 1rem 5rem;
  margin: auto;

  & > :nth-child(1) {
    background-color: ${(props) => props.theme.colors.blue};
    box-shadow: 0px 30px 20px -20px ${(props) => props.theme.colors.blue};
  }

  & > :nth-child(2) {
    background-color: ${(props) => props.theme.colors.red};
    box-shadow: 0px 30px 20px -20px ${(props) => props.theme.colors.red};
  }

  & > :nth-child(3) {
    background-color: ${(props) => props.theme.colors.violet};
    box-shadow: 0px 30px 20px -20px ${(props) => props.theme.colors.violet};
  }

  @media (min-width: 300px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
  }
`;

const Items = styled.div`
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  transition: 700ms;

  &:hover {
    scale: 1.1;
  }
`;

const Imgs = styled.img`
  width: 250px;
  padding-right: 0.5rem;
  transform: rotate(-40deg);
  transition: 700ms;

  &:hover {
    cursor: pointer;
    transform: rotate(-25deg);
  }
`;

const ItemsInfo = styled.div`
  padding: 1rem;
  color: ${(props) => props.theme.colors.white};
`;

const ItemsTitle = styled.h4`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-start;
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
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

const Button = styled(ButtonsStyles)`
  width: 80px;
  padding: 5px;
  box-shadow: none;
  border-radius: 5px;
`;

export {
  Heading,
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
