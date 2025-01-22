import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeLayout from "./pages/Home/HomeLayout";
import BookOnline from "./pages/BookOnline";
import ContactUs from "./pages/ContactUs";
import Office from "./pages/Office";
import Footer from "./components/Footer";
import FAQ from "./pages/FAQ";
import Reviews from "./pages/Reviews";
import Safety from "./pages/Safety";
import Overview from "./pages/Overview";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/book-online" element={<BookOnline />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/office" element={<Office />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
