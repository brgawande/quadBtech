import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Booking from "./screens/Booking";
import { Toaster } from "react-hot-toast";
import MyBooking from "./screens/MyBooking";
import Header from "./layouts/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mybooking" element={<MyBooking />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/booking/:name/:language" element={<Booking />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
}

export default App;
