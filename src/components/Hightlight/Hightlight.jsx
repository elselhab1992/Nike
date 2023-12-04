import shoes from "../../assets/hightlightimg.png";
import { Container } from "./HightlightStyles";
import { Headings, SideImage } from "../index";

const Hightlight = () => {
  return (
    <section>
      <Container>
        {/* left */}
        <div>
          <SideImage img={shoes} />
        </div>
        {/* right */}
        <div>
          <Headings
            heading="HIGHLIGHTS"
            subheading=" NIKE AIR WITH
             "
            moreSubHeading="LIMITLESS CHOICES"
            info="Our Purpose is to move the world forward. We take action by
            "
            moreInfo="building community, protecting our planet and increasing"
            infoComplete=" access to sport."
            btn="Explore More"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hightlight;
