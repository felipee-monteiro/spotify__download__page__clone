import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Content from "./components/Content/Content.jsx";
import Devices from "./components/Devices/Devices.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {GlobalStyles} from "./styles";

function App() {
  return (
  <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Content />
      <Devices />
      <Footer />
  </>
  );
}

export default App;
