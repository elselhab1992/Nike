/* eslint-disable no-unused-vars */
import { Title, Story } from "../index";
import { useGlobalContext } from "../Context/Context";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../constants/slider";
import { Container, SliderArrows } from "./StoriesStyles";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Stories = () => {
  const { stories } = useGlobalContext();

  return (
    <section>
      <Title heading="Top Stories" />
      <Container>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {stories.news.map((story) => {
            const { id, title, text, img, url, like, time, by, btn } = story;

            return (
              <SwiperSlide key={id}>
                <Story {...story} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
};

export default Stories;

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <SliderArrows>
      <FaChevronCircleLeft
        onClick={() => swiper.slidePrev()}
        style={{ cursor: "pointer" }}
        size={30}
      >
        &lt;
      </FaChevronCircleLeft>
      <FaChevronCircleRight
        onClick={() => swiper.slideNext()}
        style={{ cursor: "pointer" }}
        size={30}
      >
        &gt;
      </FaChevronCircleRight>
    </SliderArrows>
  );
};
