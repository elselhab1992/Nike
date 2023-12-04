import styled from "styled-components";

const Heading = styled.div`
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 3rem;
  margin-left: 5rem;

  @media (min-width: 300px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
    margin-top: 1rem;
    margin-left: 1rem;
  }

  @media (min-width: 768px) {
    margin-left: 5rem;
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
  }
`;

export { Heading };
