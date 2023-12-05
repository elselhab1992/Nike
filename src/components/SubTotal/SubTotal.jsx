import { useGlobalContext } from "../Context/Context";
import {
  Container,
  Summary,
  Total,
  Price,
  Checkout,
  Button,
} from "./SubTotalStyles";

const SubTotal = () => {
  const { cartSubtotal } = useGlobalContext();
  const subTotal = cartSubtotal();

  return (
    <section>
      <Container>
        <h3>order summary</h3>
        <Summary>
          <Total>
            <h4> Total:</h4>
            <Price>
              <h4>£{subTotal}</h4>
            </Price>
          </Total>
          <Total>
            <h4>Shipping:</h4>
            <Price>
              <h4>Free</h4>
            </Price>
          </Total>
          <Total>
            <h4> Subtotal:</h4>
            <Price>
              <h4>£{subTotal}</h4>
            </Price>
          </Total>
        </Summary>
        <Checkout>
          <Button>Check Out</Button>
        </Checkout>
      </Container>
    </section>
  );
};

export default SubTotal;
