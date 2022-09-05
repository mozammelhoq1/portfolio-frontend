import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import NavigationBar from "./Pages/Shared/NavigationBar/NavigationBar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
