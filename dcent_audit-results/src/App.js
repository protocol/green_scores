// components
import Layout from "./components/Layout";

// pages
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree"
import CTAPage from "./pages/PageCTA"

// router
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Layout>
        <Routes>

          {/* Home */}
          <Route path="/" exact element={<Home/>}/>

          {/* Page 1 */}
          <Route path="/page1" exact element={<PageOne/>}/>

          {/* Page 2 */}
          <Route path="/page2" exact element={<PageTwo/>}/>

          {/* Page 3 */}
          <Route path="/page3" exact element={<PageThree/>}/>

          {/* CTA */}
          <Route path="/cta" exact element={<CTAPage/>}/>

        </Routes>
      </Layout>
    </>
  );
}

export default App;
