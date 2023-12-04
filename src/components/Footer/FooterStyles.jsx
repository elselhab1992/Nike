import styled from "styled-components";

const Footers = styled.footer`
  background-image: linear-gradient(
    0.2deg,
    rgba(40, 173, 222, 1) 4.8%,
    rgb(27, 76, 224) 85.5%
  );
  color: ${(props) => props.theme.colors.white};
  margin-top: 2rem;
  position: sticky;
  top: 100%;

  @media (min-width: 300px) {
    margin-top: 0.5rem;
  }

  @media (min-width: 1200px) {
    margin-top: 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 2rem;
  width: 60%;

  @media (min-width: 300px) {
    padding: 0.5rem;
    width: 100%;
  }

  @media (min-width: 1200px) {
    padding: 2rem;
    width: 60%;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  @media (min-width: 768px) {
    padding: 1rem 5rem;
  }
`;

const Copyright = styled.div`
  margin: 1rem;
  font-size: 15px;

  @media (min-width: 300px) {
  }
`;

export { Footers, Container, Content, Copyright };
