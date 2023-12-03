import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import { Navbar, Hero, Popular, Hightlight } from "./components";

function App() {
  return (
    <Theme>
      <div>
        <GlobalStyles />
        <Navbar />
        <Hero />
        <Popular />
        <Hightlight />
      </div>
    </Theme>
  );
}

export default App;
