import styled from "styled-components";

const Button = styled.button`
  width: 150px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  padding: 10px;
  border-radius: 10px;
  border: 0;
  transition: 0.7s;

  &:hover {
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
  }
`;

export default Button;