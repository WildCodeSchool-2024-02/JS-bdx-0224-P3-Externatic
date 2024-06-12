import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;