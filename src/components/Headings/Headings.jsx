/* eslint-disable react/prop-types */
import { Heading, Info, Button } from "./HeadingsStyles";

const Headings = ({ heading, subheading, moreSubHeading, info, btn }) => {
  return (
    <>
      <Heading>
        <h2>{heading}</h2>
        <h6>{subheading}</h6>
        <h6>{moreSubHeading}</h6>
      </Heading>
      <Info>
        <p>{info}</p>
      </Info>
      <Button>{btn}</Button>
    </>
  );
};

export default Headings;
