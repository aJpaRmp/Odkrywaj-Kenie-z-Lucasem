import image1 from "../../assets/rest/image1.jpeg";
import image2 from "../../assets/rest/image2.jpeg";
import elephant from "../../assets/icon/elephant.png";

import { Link } from "react-router-dom";
// import audio from "../../assets/audio/audio.mp3";

const MainSection = () => {
  return (
    <section id="main" className="w-100 d-grid">
      <div className="info d-flex flex-column ">
        <h1>Poznaj z nami uroki prawdziwej Kenii</h1>
        <span className="info__span d-block  p-3">
          <a
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            href="https://pl.wikipedia.org/wiki/Kenia"
            target="_blank"
          >
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

      <div className="div__main__img div_img">
        <img
          className="main__img img1"
          src={image2}
          alt="Lew i słoń stojące obok siebie pod rozłożystym drzewem akacji na tle zachodzącego słońca."
        />
      </div>
      <div className="d-flex info2 ">
        <div className="div__main__img">
          <img
            className="main__img img2 "
            src={image1}
            alt="Dwa słonie afrykańskie przechadzają się po sawannie podczas spektakularnego zachodu słońca."
          />
        </div>
        <ul>
          <li>
            <img className="elephant" src={elephant} alt="ikonka głowy słonia" />
            Wszystkie wycieczki organizujemy dowolnego dnia tygodnia.
          </li>
          <li>
            <img className="elephant" src={elephant} alt="ikonka głowy słonia" />
            Jesteśmy elastyczni i dopasowujemy do każdego klienta.
          </li>
          <li>
            <img className="elephant" src={elephant} alt="ikonka głowy słonia" />
            Zapewniamy opiekę przewodnika mówiącego po Polsku.
          </li>
          <li>
            <img className="elephant" src={elephant} alt="ikonka głowy słonia" />
            Mamy wieloletnie doświadczenie.
          </li>
        </ul>
      </div>
      <Link id="btnContact" to="/contact" className="btn btn-primary position-relative border-0">
        Zapytaj o cenę i zaplanuj swoją wycieczkę
      </Link>
    </section>
  );
};

export default MainSection;
