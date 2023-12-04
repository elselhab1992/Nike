import shoes from "../../assets/sneaker.png";
import { Headings, SideImage } from "../index";
import { Container } from "./FeaturedStyles";

const Featured = () => {
  return (
    <section>
      <Container>
        {/* left */}
        <div>
          <Headings
            heading="FEATURED"
            subheading="NIKE SNEAKERS AIR"
            moreSubHeading="LANCING SHOES"
            info="The radiance lives on Nike Sneakers Air Lancing Shoes, the"
            infoPlus="basket ball OG that puts a fresh spin on what you know best:"
            moreInfo="durably stitched overlays, clean finishes and the perfect"
            infoComplete="amount of flash to make you shine."
            btn="explore more"
          />
        </div>
        {/* right */}
        <div>
          <SideImage img={shoes} />
        </div>
      </Container>
    </section>
  );
};

export default Featured;
