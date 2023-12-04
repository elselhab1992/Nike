/* eslint-disable react/prop-types */
import { Heading } from "./TitleStyles";

const Title = ({ heading }) => {
  return (
    <Heading>
      <h2>{heading}</h2>
    </Heading>
  );
};

export default Title;
