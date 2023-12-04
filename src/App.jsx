import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import { Navbar } from "./components";
import { Home, Cart } from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
