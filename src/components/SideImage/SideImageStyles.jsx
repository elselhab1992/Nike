import styled from "styled-components";

const Img = styled.img`
  width: 550px;
  transform: rotate(10deg);
  transition: 700ms;
  transition: 700ms;

  &:hover {
    cursor: pointer;
    transform: rotate(-2deg);
  }
`;

export { Img };
