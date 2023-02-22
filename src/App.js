// pages
import Home from "./pages/Home"
import FindingsSummary from './pages/FindingsSummary';

// router
import { Routes, Route } from "react-router-dom"

// components
import Navbar from './components/Navbar';
import GreenScore from "./pages/GreenScore";
import GenerateGreenScore from "./pages/GenerateGreenScore";
import SPAdmin from "./pages/SPAdmin";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          {/* Home */}
          <Route path="/" exact element={<Home/>}/>

          {/* Findings Summary */}
          <Route path="/findings" exact element={<FindingsSummary/>}/>

          {/* Green Score */}
          <Route path="/green_score" exact element={<GreenScore/>}/>

          {/* Generate Green Score */}
          <Route path="/generate_green_score" exact element={<GenerateGreenScore/>}/>

          {/* SP Admin - Claim Green Score */}
          <Route path="/sp_admin" exact element={<SPAdmin/>}/>
      </Routes>
    </>
  );
}

export default App;
