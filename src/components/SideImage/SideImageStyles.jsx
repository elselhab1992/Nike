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

  @media (min-width: 300px) {
    padding: 0 5rem;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
  }
`;

export { Img };
