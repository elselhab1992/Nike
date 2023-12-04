import logo from "../../assets/logo.png";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Header, Nav } from "./NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Header>
      <Link to="/">
        <img src={logo} alt="nike" width={70} />
      </Link>
      <Nav>
        <FaSearch
          style={{
            fontSize: 25,
            color: "#fff",
            margin: "0 0.5rem",
            cursor: "pointer",
          }}
        />
        <FaHeart
          style={{
            fontSize: 25,
            color: "#fff",
            margin: "0 0.5rem",
            cursor: "pointer",
          }}
        />
        <Link to="/cart">
          <FaShoppingCart
            style={{
              fontSize: 25,
              color: "#fff",
              margin: "0 0.5rem",
              cursor: "pointer",
            }}
          />
        </Link>
      </Nav>
    </Header>
  );
};

export default Navbar;
