/* eslint-disable react/prop-types */
import { PrimaryButton, SecondaryButton } from "./ButtonsStyles";

const Buttons = ({ children }) => {
  return <PrimaryButton>{children}</PrimaryButton>;
};

const SecondaryButtons = ({ children }) => {
  return <SecondaryButton>{children}</SecondaryButton>;
};

export { Buttons, SecondaryButtons };
