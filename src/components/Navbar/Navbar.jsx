import logo from "../../assets/logo.png";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Header, Nav, Count } from "./NavbarStyles";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";

const Navbar = () => {
  const { getTotalCartItems } = useGlobalContext();

  const totalCartItems = getTotalCartItems();

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
        <Count>{totalCartItems}</Count>
      </Nav>
    </Header>
  );
};

export default Navbar;
