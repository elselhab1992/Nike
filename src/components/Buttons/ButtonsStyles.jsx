import styled from "styled-components";

const PrimaryButton = styled.button`
  width: 150px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  padding: 10px;
  border-radius: 10px;
  border: 0;
  transition: 700ms;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.secondary};
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.secondary};

  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.secondary};
  }
`;

export { PrimaryButton, SecondaryButton };
