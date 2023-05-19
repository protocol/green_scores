// pages
import Home from "./pages/Home"
import AuditOutputs from './pages/AuditOutputs';

// router
import { Routes, Route } from "react-router-dom"

// components
import Navbar from './components/Navbar';
import SPAuditOutput from "./components/SPAuditOutput";

// pages
import SearchOutputs from "./pages/SearchOutputs";

function App() {
  

  return (
    <>
    <div className="dark:bg-gray-900">
      <Navbar/>
      <Routes>
          {/* Home */}
          <Route path="/" exact element={<Home/>}/>

          {/* Audit Outputs */}
          <Route path="/auditoutputs" exact element={<AuditOutputs/>}/>
          <Route path="/auditoutputs/:name/:record_type" exact element={<SPAuditOutput/>}/>

          {/* Search */}
          <Route path="/search" exact element={<SearchOutputs/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
