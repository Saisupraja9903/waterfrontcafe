import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import CookiesPopup from "./components/CookiesPopup";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import FindUs from "./pages/FindUs";
import Menu from "./pages/Menu";
import Breakfast from "./pages/Breakfast";
import Drinks from "./pages/Drinks";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import Privacy from "./pages/Privacy";
import CookiePolicy from "./pages/CookiePolicy";
import Terms from "./pages/Terms";
import Rewards from "./pages/Rewards";
import HistoryOfBenson from "./pages/HistoryOfBenson";
import ThingsToDo from "./pages/ThingsToDo";
import BensonWildlife from "./pages/BensonWildlife";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <CookiesPopup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/find-us" element={<FindUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/photo-gallery" element={<Gallery />} />
        <Route path="/the-history-of-benson" element={<HistoryOfBenson />} />
        <Route path="/things-to-do" element={<ThingsToDo />} />
        <Route path="/benson-wildlife" element={<BensonWildlife />} />
        <Route path="/reward-card" element={<Rewards />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
