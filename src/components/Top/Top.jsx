import { useGlobalContext } from "../Context/Context";
import { IoMdStar } from "react-icons/io";
import { IoBagCheckSharp } from "react-icons/io5";
import { Title } from "../index";
import {
  Container,
  Items,
  Imgs,
  ItemsInfo,
  ItemsTitle,
  Price,
  Prices,
  Ratings,
  Button,
  Bag,
} from "./TopStyles";

const Top = () => {
  const { top } = useGlobalContext();

  return (
    <section>
      <Title heading="Top Rated Sales" />
      <Container>
        {top.items.map((item) => {
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
                  />
                  <Button>{btn}</Button>
                </Bag>
                <div>
                  <Imgs src={img} alt="shoes" />
                </div>
              </ItemsInfo>
              {/* right */}
            </Items>
          );
        })}
      </Container>
    </section>
  );
};

export default Top;
