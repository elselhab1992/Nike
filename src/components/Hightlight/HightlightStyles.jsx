import styled from "styled-components";
import ButtonsStyles from "../Buttons/ButtonsStyles";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20rem;
  padding: 1rem 5rem;
  margin: 2rem auto;
`;

const Heading = styled.div`
  font-size: ${(props) => props.theme.fontSizes.large};
  line-height: 1;
  margin-bottom: 1.5rem;

  & > :nth-child(1) {
    color: ${(props) => props.theme.colors.blue};
  }

  & > :nth-child(2) {
    color: ${(props) => props.theme.colors.secondary};
    font-size: ${(props) => props.theme.fontSizes.larger};
  }
`;

const Info = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 1rem;
`;

const Button = styled(ButtonsStyles)`
  width: 150px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.small};
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.secondary};
    border: 1px solid ${(props) => props.theme.colors.secondary};
  }
`;

const Img = styled.img`
  transform: rotate(10deg);
  transition: 700ms;
  transition: 700ms;

  &:hover {
    cursor: pointer;
    transform: rotate(-15deg);
  }
`;

export { Container, Heading, Info, Button, Img };
