import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px #ccc;
  width: 600px;
  height: 150px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 300px) {
    width: 100%;
    gap: 1rem;
    padding: 0 0.5rem;
  }

  @media (min-width: 768px) {
    width: 600px;
    gap: 0;
    padding: 1rem;
  }
`;

const Img = styled.img`
  width: 200px;

  @media (min-width: 300px) {
    width: 150px;
  }

  @media (min-width: 768px) {
    width: 200px;
  }
`;

const Title = styled.h3`
  font-size: 15px;

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

const Count = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: auto;
`;

const Input = styled.input`
  width: 25px;
  height: 25px;
  text-align: center;
  font-weight: bold;
`;

export { Container, Img, Count, Input, Title };
