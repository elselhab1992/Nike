import styled from "styled-components";

const Container = styled.div`
  padding-top: 100px;
  color: ${(props) => props.theme.colors.secondary};
`;

const Heading = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 300px) {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: auto;
`;

const PromoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export { Container, Content, Heading, PromoDiv };
