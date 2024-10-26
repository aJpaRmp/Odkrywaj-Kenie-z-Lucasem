import image1 from "../../../assets/rest/image1.jpg";
import image2 from "../../../assets/rest/image2.jpg";

import rotate from "../../../assets/icon/rotate.svg";

import { useState } from "react";
// import audio from "../../assets/audio/audio.mp3";

const PartOneMain = () => {
  const [isSwapped, setIsSwapped] = useState(false);
  const handleSwapImages = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <div className="main__divOne row">
      <div className="info col-xl-10 col-md-3">
        <h1>Poznaj z nami uroki prawdziwej Kenii</h1>
        <span className="first__span">
          <a href="https://pl.wikipedia.org/wiki/Kenia" target="_blank">
            Kenia
          </a>{" "}
          jest przepięknym krajem położonym nad Oceanem Indyjskim, oferującym niezapomniane widoki i mnóstwo atrakcji.
          Przepiękne plaże, turkusowe wody oraz rozległe sawanny tworzą raj, który przyciąga podróżników z całego
          świata. Jedną z najważniejszych atrakcji turystycznych jest oczywiście safari w Narodowym Parku Tsavo, gdzie
          można spotkać majestatyczne słonie, lwy, żyrafy i wiele innych dzikich zwierząt. To niezapomniana i niezwykła
          przygoda, która pozwala z bliska obserwować zarówno faunę, jak i florę na malowniczej sawannie, tworząc
          niezatarte wspomnienia, które pozostaną z Tobą na zawsze.
        </span>
      </div>

      <div className="div__main col-xl-2 col-md-9">
        <div className={`div__main__img ${isSwapped ? "second" : "first"}`}>
          <img
            className="main__img img"
            src={image2}
            alt="Lew i słoń stojące obok siebie pod rozłożystym drzewem akacji na tle zachodzącego słońca."
          />
        </div>
        <div className={`div__main__img ${isSwapped ? "first" : "second"}`}>
          <img
            className="main__img2 img"
            src={image1}
            alt="Dwa słonie afrykańskie przechadzają się po sawannie podczas spektakularnego zachodu słońca."
          />
        </div>
        <button type="button" id="arrow" className="btn btn-link" onClick={handleSwapImages}>
          <img src={rotate} alt="strzałka zmieniania widocznego zdjęcia" />
        </button>
      </div>
    </div>
  );
};

export default PartOneMain;
