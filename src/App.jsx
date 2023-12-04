import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import { Navbar, Hero, Popular, Hightlight, Top } from "./components";

function App() {
  return (
    <Theme>
      <div>
        <GlobalStyles />
        <Navbar />
        <Hero />
        <Popular />
        <Hightlight />
        <Top />
      </div>
    </Theme>
  );
}

export default App;
