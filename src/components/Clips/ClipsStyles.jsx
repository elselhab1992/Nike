import styled from "styled-components";

const Clip = styled.img`
  width: 140px;
  border-radius: 15px;
  object-fit: cover;
  transition: 700ms;

  &:hover {
    scale: 1.25;
    cursor: pointer;
  }
`;

export { Clip };
