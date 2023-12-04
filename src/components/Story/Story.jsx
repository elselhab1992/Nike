/* eslint-disable react/prop-types */
import { FaHeart } from "react-icons/fa";
import {
  Section,
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
    <Section>
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
            {text.length > 200 ? text.substring(0, 160) + "..." : text}
          </Text>
          <BtnDiv>
            <a href={url} target="_blank" rel="noreferrer">
              <Button>{btn}</Button>
            </a>
          </BtnDiv>
        </Content>
      </Container>
    </Section>
  );
};

export default Story;
