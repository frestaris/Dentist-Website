import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeLayout from "./pages/Home/HomeLayout";
import BookOnline from "./pages/BookOnline";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/ContactUs";
import Office from "./pages/Office";
import Footer from "./components/Footer";
import FAQ from "./pages/FAQ";
import Reviews from "./pages/Reviews";
import Safety from "./pages/Safety";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/book-online" element={<BookOnline />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/office" element={<Office />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/safety" element={<Safety />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
