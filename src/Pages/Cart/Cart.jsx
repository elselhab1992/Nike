/* eslint-disable no-unused-vars */
import { useGlobalContext } from "../../components/Context/Context";
import { CartItem, SubTotal, EmptyCart, Promo } from "../../components/index";
import { Container, Content, Heading, PromoDiv } from "./CartStyles";

const Cart = () => {
  const { cartItems, products, cartSubtotal } = useGlobalContext();
  const subTotal = cartSubtotal();

  return (
    <section>
      <Container>
        {subTotal > 0 ? (
          <>
            <Heading>
              <h2>Your Bag</h2>
            </Heading>
            <div>
              <Content>
                {products.map((product) => {
                  const { id, title, price, img, text } = product;
                  if (cartItems[id] !== 0) {
                    return <CartItem key={id} {...product} />;
                  }
                })}
              </Content>
              <PromoDiv>
                <Promo />
                <SubTotal />
              </PromoDiv>
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </Container>

      <div></div>
    </section>
  );
};

export default Cart;
