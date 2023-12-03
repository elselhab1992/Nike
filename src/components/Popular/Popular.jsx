import {
  Heading,
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

const Popular = () => {
  const { popular } = useGlobalContext();

  return (
    <section>
      <Heading>
        <h2>Popular Sales</h2>
      </Heading>
      <Container>
        {popular.items.map((item) => {
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
                      backgroundColor: "rgba(247, 241, 240, 0.5)",
                      padding: "0 3",
                      color: "#000",
                      borderRadius: 5,
                      cursor: "pointer",
                    }}
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
