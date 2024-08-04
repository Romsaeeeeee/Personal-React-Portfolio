import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// import Topbar from "./components/Topbar";
// import BodyTesting from "./pages/MainPages/BodyTesting";
// import SidePanel from "./pages/SidePanel";
import Container from "./layout/Container";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<Container />}
    >
      {/* ABOUT PAGE */}
      <Route path="about" element={<About />}></Route>
      {/* RESUME PAGE */}
      <Route path="resume" element={<Resume />}></Route>
      {/* PORTFOLIO PAGE */}
      <Route path="portfolio" element={<Portfolio />}></Route>
      {/* CONTACT PAGE */}
      <Route path="contact" element={<Contact />}></Route>
      {/* Default Page */}
      <Route path="*" element={<Navigate to="about" />}></Route>
    </Route>
  ));

function App() {
  return <RouterProvider router={router} />;
}

export default App;
