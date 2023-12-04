import styled from "styled-components";

const Container = styled.div`
  padding: 1rem 5rem;
  position: relative;

  @media (min-width: 300px) {
    padding: 1rem;
  }

  @media (min-width: 1200px) {
    padding: 1rem 5rem;
  }
`;

const SliderArrows = styled.div`
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const SliderArrow = styled.button`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.small};
  padding: 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
`;

export { Container, SliderArrows, SliderArrow };
