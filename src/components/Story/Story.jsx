/* eslint-disable react/prop-types */
import { FaHeart } from "react-icons/fa";
import {
  Container,
  Content,
  Img,
  Info,
  Heart,
  Text,
  BtnDiv,
  Button,
} from "./StoryStyles";

const Story = ({ title, text, img, url, like, time, by, btn }) => {
  return (
    <section>
      <Container>
        <Img src={img} alt="shoes" width={400} />
        <Content>
          <Info>
            <Heart>
              <span>
                <FaHeart
                  size={20}
                  style={{ color: "red", cursor: "pointer" }}
                />
              </span>
              {like}
            </Heart>
            <p>{time}</p>
            <p>#{by}</p>
          </Info>
          <h4>{title}</h4>
          <Text>
            {text.length > 150 ? text.substring(0, 120) + "..." : text}
          </Text>
          <BtnDiv>
            <a href={url} target="_blank" rel="noreferrer">
              <Button>{btn}</Button>
            </a>
          </BtnDiv>
        </Content>
      </Container>
    </section>
  );
};

export default Story;
