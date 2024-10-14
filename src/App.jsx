import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  return (
    <div className="bg-[#F0F0F6] h-auto w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// Assignment submitted by:
// ANANT BHARDWAJ
// Bhagwan Parshuram Institute of Technology, Delhi
// email: bhardwaj.anant2001@gmail.com
// University Roll number: 11120802721
