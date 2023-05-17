// pages
import Home from "./pages/Home"
import FindingsSummary from './pages/FindingsSummary';

// router
import { Routes, Route } from "react-router-dom"

// components
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          {/* Home */}
          <Route path="/" exact element={<Home/>}/>

          {/* Findings Summary */}
          <Route path="/findings" exact element={<FindingsSummary/>}/>
      </Routes>
    </>
  );
}

export default App;
