import Banner from "./components/Banner";
import BookingSteps from "./components/BookingSteps";
import BookTrip from "./BookTrip";
import Client from "./components/Client";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Journey from "./components/Journey";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Tour from "./pages/Tour";
import Package from "./pages/Package";
import Contact from "./pages/Contact";
import BookTripPage from "./pages/BookTripPage";

const App = () => {
  return (
    <div>
        <Navbar />
      <main>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/about" Component={About}/>
          <Route path="/tour" Component={Tour}/>
          <Route path="/package" Component={Package}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="/book-trip" Component={BookTripPage}/>
        </Routes>

      </main>
        <Footer />
    </div>
  );
};

export default App;
