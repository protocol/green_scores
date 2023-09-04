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
import ValidatorsView from "./pages/ValidatorsView";
import Calculator from "./pages/Calculator";

function App() {

  return (
    <>
    <div className="dark:bg-gray-900">
      <Navbar/>
      <Routes>
          {/* Home */}
          <Route path="/" exact element={<Home/>}/>

          {/* EVP Results */}
          <Route path="/auditoutputs" exact element={<AuditOutputs/>}/>
          <Route path="/auditoutputs/:name/:record_type" exact element={<SPAuditOutput/>}/>

          {/* Search */}
          <Route path="/search" exact element={<SearchOutputs/>}/>

          {/* Validators */}
          <Route path="/validators" exact element={<ValidatorsView/>}/>

          {/* Calculator */}
          <Route path="/calculator/:CID" exact element={<Calculator/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
