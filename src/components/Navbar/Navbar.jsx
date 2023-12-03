import logo from "../../assets/logo.png";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Header, Nav } from "./NavbarStyles";

const Navbar = () => {
  return (
    <Header>
      <img src={logo} alt="nike" width={70} />
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
        <FaShoppingCart
          style={{
            fontSize: 25,
            color: "#fff",
            margin: "0 0.5rem",
            cursor: "pointer",
          }}
        />
      </Nav>
    </Header>
  );
};

export default Navbar;
