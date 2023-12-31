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

  @media (min-width: 300px) {
    width: 80px;
    padding-left: 0.5rem;
  }

  @media (min-width: 768px) {
    width: 100px;
  }

  @media (min-width: 1200px) {
    width: 140px;
    padding-left: 0;
  }
`;

export { Clip };
