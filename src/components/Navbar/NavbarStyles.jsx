import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 2rem 5rem;
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: rgb(27, 76, 224);

  @media (min-width: 300px) {
    padding: 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 2rem 5rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Header, Nav };
