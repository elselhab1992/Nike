import img from "../../assets/hightlightimg.png";
import { Container, Heading, Info, Button, Img } from "./HightlightStyles";

const Hightlight = () => {
  return (
    <section>
      <Container>
        {/* left */}
        <div>
          <Img src={img} alt="shoes" width={550} />
        </div>
        {/* right */}
        <div>
          <Heading>
            <h2>HIGHLIGHTS</h2>
            <h6>
              NIKE AIR WITH
              <br /> LIMITLESS CHOICES
            </h6>
          </Heading>
          <Info>
            Our Purpose is to move the world forward. We take action by
            <br /> building community, protecting our planet and increasing
            <br />
            access to sport.
          </Info>
          <Button>Explore More</Button>
        </div>
      </Container>
    </section>
  );
};

export default Hightlight;
