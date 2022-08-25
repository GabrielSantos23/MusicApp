import { useState } from "react";
import "./App.css";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuMobile from "./components/MenuMobile";
import Search from "./components/Search";
import Footer from "./Footer";

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  return (
    <>
      <div className='App overflow-hidden text-white'>
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
        <Header setMenuIsVisible={setMenuIsVisible} />
        <Hero />
        <Experience />
        <Search />
        <Footer />
      </div>
    </>
  );
}

export default App;
