import styled from "styled-components";
import { PrimaryButton } from "../Buttons/ButtonsStyles";

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

  & > :nth-child(3) {
    color: ${(props) => props.theme.colors.secondary};
    font-size: ${(props) => props.theme.fontSizes.larger};
  }

  @media (min-width: 300px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
    margin-bottom: 1rem;

    & > :nth-child(2) {
      font-size: ${(props) => props.theme.fontSizes.large};
    }

    & > :nth-child(3) {
      font-size: ${(props) => props.theme.fontSizes.large};
    }
  }

  @media (min-width: 1200px) {
    & > :nth-child(2) {
      font-size: ${(props) => props.theme.fontSizes.larger};
    }

    & > :nth-child(3) {
      font-size: ${(props) => props.theme.fontSizes.larger};
    }
  }
`;

const Info = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 1rem;
  line-height: 0.5;

  @media (min-width: 300px) {
    line-height: 1;
    margin-bottom: 0;
    width: 80%;
  }
`;

const Button = styled(PrimaryButton)`
  width: 150px;
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-top: 0.5rem;
  border-radius: 5px;
`;

export { Heading, Info, Button };
