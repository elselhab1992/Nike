import { Container, Input, Content, Button, Heading } from "./PromoStyles";

const Promo = () => {
  return (
    <Container>
      <Heading>have a discount code ?</Heading>
      <Content>
        <Input type="text" placeholder="Enter code here" />
        <Button>Apply Code</Button>
      </Content>
    </Container>
  );
};

export default Promo;
