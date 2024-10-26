import { Link } from "react-router-dom";
import PartTwoMain from "./PartMain/PartTwoMain";
import PartOneMain from "./PartMain/PartOneMain";
// import audio from "../../assets/audio/audio.mp3";

const MainSection = () => {
  return (
    <section id="main" className="d-flex w-100 flex-column">
      {/* <div className="audio d-flex justify-content-center">
        <audio src={audio} controls></audio>
      </div> */}
      <PartOneMain />
      <PartTwoMain />
      <Link id="btnContact" to="/contact" className="btn btn-primary">
        Zapytaj o cenę i zaplanuj swoją wycieczkę
      </Link>
    </section>
  );
};

export default MainSection;
