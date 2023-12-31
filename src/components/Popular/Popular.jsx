/* eslint-disable no-unused-vars */
import {
  Container,
  Items,
  Imgs,
  ItemsInfo,
  ItemsTitle,
  Price,
  Prices,
  Ratings,
  Bag,
  Button,
} from "./PopularStyles";
import { useGlobalContext } from "../Context/Context";
import { IoBagCheckSharp } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { Title } from "../index";
import { popularsales } from "../../data/data";

const Popular = () => {
  const { addToCart } = useGlobalContext();

  return (
    <section>
      <Title heading="Popular Sales" />
      <Container>
        {popularsales.map((item) => {
          const { id, title, text, rating, btn, img, price } = item;

          return (
            <Items key={id}>
              {/* left */}
              <ItemsInfo>
                <ItemsTitle>{title}</ItemsTitle>
                <p>{text}</p>
                <Price>
                  <Prices>£{price}</Prices>
                  <Ratings>
                    <span>
                      <IoMdStar size={20} color="#fff" />
                    </span>
                    {rating}
                  </Ratings>
                </Price>

                <Bag>
                  <IoBagCheckSharp
                    size={30}
                    style={{
                      backgroundColor: "#dbd6d6",
                      padding: "0 3",
                      color: "#000",
                      borderRadius: 5,
                      cursor: "pointer",
                    }}
                    onClick={() => addToCart(id)}
                  />
                  <Button>{btn}</Button>
                </Bag>
              </ItemsInfo>
              {/* right */}
              <div>
                <Imgs src={img} alt="shoes" />
              </div>
            </Items>
          );
        })}
      </Container>
    </section>
  );
};

export default Popular;
