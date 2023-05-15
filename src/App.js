// pages
import Home from "./pages/Home"
import AuditOutputs from './pages/AuditOutputs';

// router
import { Routes, Route } from "react-router-dom"

// components
import Navbar from './components/Navbar';
import SPAuditOutput from "./components/SPauditOutput";

function App() {
  

  return (
    <>
    <div className="dark:bg-gray-900">
      <Navbar/>
      <Routes>
          {/* Home */}
          <Route path="/" exact element={<Home/>}/>

          {/* Audit Outputs */}
          <Route path="/Auditoutputs" exact element={<AuditOutputs/>}/>
          <Route path="/Auditoutputs/:name" exact element={<SPAuditOutput/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
