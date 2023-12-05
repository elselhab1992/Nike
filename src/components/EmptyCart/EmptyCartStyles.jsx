import styled from "styled-components";
import { PrimaryButton } from "../Buttons/ButtonsStyles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 5rem auto;

  @media (min-width: 300px) {
    margin: 2rem auto;
  }

  @media (min-width: 768px) {
    margin: 5rem auto;
  }
`;

const Button = styled(PrimaryButton)`
  width: 250px;
  padding: 8px;
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 5px;
  transition: 700ms;

  &:hover {
    cursor: pointer;
  }
`;

export { Container, Button };
