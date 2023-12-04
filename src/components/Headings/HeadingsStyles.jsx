import styled from "styled-components";
import ButtonsStyles from "../Buttons/ButtonsStyles";

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
`;

const Info = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 1rem;
  line-height: 0.5;
`;

const Button = styled(ButtonsStyles)`
  width: 150px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.small};
  padding: 10px;
  margin-top: 0.5rem;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.secondary};
    border: 1px solid ${(props) => props.theme.colors.secondary};
  }
`;

export { Heading, Info, Button };
