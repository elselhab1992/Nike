import styled from "styled-components";
import { PrimaryButton } from "../Buttons/ButtonsStyles";

const Container = styled.div`
  border-radius: 10px;
  border: 1px solid #ccc;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Img = styled.img`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 1rem;

  & > :nth-child(3) {
    color: ${(props) => props.theme.colors.blue};
  }
`;

const Heart = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
`;

const Text = styled.p`
  line-height: 1.3;
`;

const BtnDiv = styled.div`
  text-align: center;
`;

const Button = styled(PrimaryButton)`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-top: 1rem;
  transition: 700ms;
`;

export { Container, Content, Img, Info, Heart, Text, BtnDiv, Button };
