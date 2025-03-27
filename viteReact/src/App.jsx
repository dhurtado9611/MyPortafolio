import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Proyects from "./pages/Proyects";


function App() {
  return (
    <Router>
      <div className="flex">
        {/* Navbar lateral */}
        <Navbar />

        {/* Rutas */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/skills" element={<Skills />}/>
            <Route path="/projects" element={<Proyects />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
