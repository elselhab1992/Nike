import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import {
  Navbar,
  Hero,
  Popular,
  Hightlight,
  Top,
  Featured,
  Stories,
  Footer,
} from "./components";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Popular />
      <Hightlight />
      <Top />
      <Featured />
      <Stories />
      <Footer />
    </Theme>
  );
}

export default App;
