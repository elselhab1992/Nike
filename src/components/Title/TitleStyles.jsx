import styled from "styled-components";

const Heading = styled.div`
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 3rem;
  margin-left: 5rem;
`;

export { Heading };
