import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import rotate from "../../assets/rotate.svg";
import elephant from "../../assets/elephant.png";
import { useState } from "react";
// import audio from "../../assets/audio.mp3";

const MainSection = () => {
  const [isSwapped, setIsSwapped] = useState(false);
  const handleSwapImages = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <section id="main" className="d-flex flex-column">
      <div className="main__divOne d-flex">
        <div className="info d-flex  flex-column">
          <h1>Poznaj z nami uroki prawdziwej Kenii</h1>
          <span className="first__span">
            <a href="https://pl.wikipedia.org/wiki/Kenia" target="_blank">
              Kenia
            </a>{" "}
            jest przepięknym krajem położonym nad Oceanem Indyjskim, oferującym niezapomniane widoki i mnóstwo atrakcji.
            Przepiękne plaże, turkusowe wody oraz rozległe sawanny tworzą raj, który przyciąga podróżników z całego
            świata. Jedną z najważniejszych atrakcji turystycznych jest oczywiście safari w Narodowym Parku Tsavo, gdzie
            można spotkać majestatyczne słonie, lwy, żyrafy i wiele innych dzikich zwierząt. To niezapomniana i
            niezwykła przygoda, która pozwala z bliska obserwować zarówno faunę, jak i florę na malowniczej sawannie,
            tworząc niezatarte wspomnienia, które pozostaną z Tobą na zawsze.
          </span>
        </div>

        <div className="div__main">
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
      <div className="main__divTwo d-flex flex-row-reverse justify-content-around align-items-center">
        <div className="second_info">
          <span className="second__span">
            <ul>
              <li>
                <img src={elephant} alt="ikonka głowy słonia" />
                Wszystkie wycieczki organizujemy dowolnego dnia tygodnia.
              </li>
              <li>
                <img src={elephant} alt="ikonka głowy słonia" />
                Jesteśmy elastyczni i dopasowujemy do każdego klienta.
              </li>
              <li>
                <img src={elephant} alt="ikonka głowy słonia" />
                Zapewniamy opiekę przewodnika mówiącego po Polsku.
              </li>
              <li>
                <img src={elephant} alt="ikonka głowy słonia" />
                Mamy wieloletnie doświadczenie.
              </li>
            </ul>
          </span>
        </div>
        <div className="main__divTwo_img">
          <img
            className="main__img3"
            src={image3}
            alt="Żyrafa i słoń stojące naprzeciwko siebie pod rozłożystym drzewem akacji na tle zachodzącego słońca."
          />
        </div>
        <button type="button" id="arrow" className="btn" onClick={handleSwapImages}>
          <img src={rotate} alt="strzałka zmieniania widocznego zdjęcia" />
        </button>
      </div>
      <button type="button" id="btnContact">
        <a href="#Contact">Zapytaj o cenę i zaplanuj swoją wycieczkę</a>
      </button>
    </section>
  );
};

export default MainSection;
