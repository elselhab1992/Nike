import bag from "../../assets/emptybag.png";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { Container, Button } from "./EmptyCartStyles";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section>
      <Container>
        <img src={bag} alt="bag" width={200} />
        <Link to="/">
          <Button>
            <FaAngleDoubleLeft
              size={20}
              style={{ color: "#fff", marginRight: 10 }}
            />
            Back To Nike Shop
          </Button>
        </Link>
      </Container>
    </section>
  );
};

export default EmptyCart;
