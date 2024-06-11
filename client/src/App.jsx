import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default App;

