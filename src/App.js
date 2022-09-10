import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import NavigationBar from "./Pages/Shared/NavigationBar/NavigationBar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Pages/Shared/Footer/Footer";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
