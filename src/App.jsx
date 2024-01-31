import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Booking from "./screens/Booking";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/booking/:name/:language" element={<Booking />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
}

export default App;
