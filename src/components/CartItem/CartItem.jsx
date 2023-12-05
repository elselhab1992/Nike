/* eslint-disable react/prop-types */
import { useGlobalContext } from "../Context/Context";
import { FaMinusSquare } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";
import { Container, Count, Input, Img, Title } from "./CartItemStyles";

const CartItem = ({ id, title, text, img, price }) => {
  const { cartItems, updateCartAmount, addToCart, removeFromCart } =
    useGlobalContext();

  return (
    <section>
      <Container>
        {/* left */}
        <div>
          <Img src={img} alt={title} />
        </div>
        {/* right */}
        <div>
          <Title>{title}</Title>
          <p>{text}</p>
          <h4>£{price}</h4>
          <Count>
            <span>
              <FaMinusSquare
                size={25}
                onClick={() => removeFromCart(id)}
                style={{ cursor: "pointer" }}
              />
            </span>
            <Input
              id="amount"
              name="amount"
              value={cartItems[id]}
              onChange={(e) => updateCartAmount(e.target.value, id)}
            />
            <span>
              <FaSquarePlus
                size={25}
                onClick={() => addToCart(id)}
                style={{ cursor: "pointer" }}
              />
            </span>
          </Count>
        </div>
      </Container>
    </section>
  );
};

export default CartItem;
