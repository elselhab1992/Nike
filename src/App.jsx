import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import { Navbar, Footer } from "./components";
import { Home, Cart } from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
