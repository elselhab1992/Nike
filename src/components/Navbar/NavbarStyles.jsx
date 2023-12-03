import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 2rem 5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Header, Nav };
