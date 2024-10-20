import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
// import audio from "../../assets/audio.mp3";

const MainSection = () => {
  return (
    <section id="main">
      {/* <audio id="Audio" autoPlay loop>
        <source src={audio} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio> */}
      <div className="main__divOne d-flex justify-content-center align-items-center">
        <div className="info d-flex flex-column">
          <h1>Poznaj z nami uroki prawdziwej Kenii</h1>
          <span>
            Kenia jest przepięknym krajem położonym nad Oceanem Indyjskim, oferującym niezapomniane widoki i mnóstwo
            atrakcji. Przepiękne plaże, turkusowe wody oraz rozległe sawanny tworzą raj, który przyciąga podróżników z
            całego świata. Jedną z najważniejszych atrakcji turystycznych jest oczywiście safari w Narodowym Parku
            Tsavo, gdzie można spotkać majestatyczne słonie, lwy, żyrafy i wiele innych dzikich zwierząt. To
            niezapomniana i niezwykła przygoda, która pozwala z bliska obserwować zarówno faunę, jak i florę na
            malowniczej sawannie, tworząc niezatarte wspomnienia, które pozostaną z Tobą na zawsze.
          </span>
          <button type="button" id="btnContact">
            Zapytaj o cenę i zaplanuj swoją wycieczkę
          </button>
        </div>

        <img
          className="main__img"
          src={image2}
          alt="Lew i słoń stojące naprzeciwko siebie pod rozłożystym drzewem akacji na tle zachodzącego słońca."
        />
      </div>
      <div className="main__divTwo d-flex flex-row-reverse  justify-content-center align-items-center">
        <span>
          Wszystkie wycieczki organizujemy dowolnego dnia tygodnia. Jesteśmy elastyczni i dopasowujemy do każdego
          klienta. Zapewniamy opiekę przewodnika mówiącego po Polsku. Mamy wieloletnie doświadczenie.
        </span>
        <img
          className="main__img"
          src={image1}
          alt="Dwa słonie afrykańskie przechadzają się po sawannie podczas spektakularnego zachodu słońca."
        />
      </div>
    </section>
  );
};

export default MainSection;
