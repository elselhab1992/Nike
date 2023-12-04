/* eslint-disable react/prop-types */
import { Heading, Info, Button } from "./HeadingsStyles";

const Headings = ({
  heading,
  subheading,
  moreSubHeading,
  info,
  infoPlus,
  moreInfo,
  infoComplete,
  btn,
}) => {
  return (
    <>
      <Heading>
        <h2>{heading}</h2>
        <h6>{subheading}</h6>
        <h6>{moreSubHeading}</h6>
      </Heading>
      <Info>{info}</Info>
      <Info>{infoPlus}</Info>
      <Info>{moreInfo}</Info>
      <Info>{infoComplete}</Info>
      <Button>{btn}</Button>
    </>
  );
};

export default Headings;
