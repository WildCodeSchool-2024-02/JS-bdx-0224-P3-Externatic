import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Outlet />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
