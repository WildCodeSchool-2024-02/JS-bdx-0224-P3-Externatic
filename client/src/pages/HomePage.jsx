import Presentation from "../components/Presentation";
import Slider from "../components/Slider";
import Values from "../components/Values";
import ModalRegistration from "../components/ModalRegistration";

function HomePage() {

  return (
    <main className="relative">
      <Presentation />
      <Values />
      <Slider />
    </main>
  );
}

export default HomePage;
