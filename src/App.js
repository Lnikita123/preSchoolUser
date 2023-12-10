import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home/Body";
import Footer from "./Home/Footer";
import About from "./About/About";
import Admissions from "./Admission/Admissions";
import Program from "./Programs/Program";
import Curriculumpage from "./Curriculum/CurriculumPage";
import Contact from "./Contact/Contact";
function App() {
  return (
    <>
      <Router>
        <ToastContainer className="!z-[9999]" />
        <div>
          <Navbar />
          {/* {!isMobileMenuOpen && ( */}
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/Admissions" element={<Admissions />} />
              <Route path="/Program" element={<Program />} />
              <Route path="/Curriculumpage" element={<Curriculumpage />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
            <Footer />
          </>
          {/* )} */}
        </div>
      </Router>
    </>
  );
}

export default App;
