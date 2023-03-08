// pages
import Home from "./pages/Home"
import FindingsSummary from './pages/FindingsSummary';
import AuditOutputs from './pages/AuditOutputs';

// router
import { Routes, Route } from "react-router-dom"

// components
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <div className="dark:bg-gray-900">
      <Navbar/>
      <Routes>
          {/* Home */}
          <Route path="/" exact element={<Home/>}/>

          {/* Findings Summary */}
          <Route path="/findings" exact element={<FindingsSummary/>}/>

          {/* Findings Summary */}
          <Route path="/auditoutputs" exact element={<AuditOutputs/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
