import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;

  @media (min-width: 300px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 42rem;
    padding: 1rem 5rem;
  }
`;

export { Container };
