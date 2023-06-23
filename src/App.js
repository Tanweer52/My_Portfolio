import Intro from "./components/Intro/intro"
import About from "./components/about/about";
import ProductList from "./components/productList/productList";
import Contact from "./components/contact/contact";
import Toggle from "./components/toggle/toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";

function App() {

const theme=useContext(ThemeContext);
const darkMode= theme.state.darkMode;

  return (

    <div style={{backgroundColor:darkMode?"black" :"grey", color:darkMode?"wheat":"white"}}>
      <Toggle />
      <Intro ></Intro>
      <About />
      <ProductList></ProductList>
      <Contact />

    </div>

  );
}

export default App;
