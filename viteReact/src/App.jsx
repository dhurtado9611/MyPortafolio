import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <div className="flex">
        {/* Navbar lateral */}
        <Navbar />

        {/* Rutas */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
