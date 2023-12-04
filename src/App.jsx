import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import { Navbar, Hero, Popular, Hightlight, Top, Featured } from "./components";

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
    </Theme>
  );
}

export default App;
