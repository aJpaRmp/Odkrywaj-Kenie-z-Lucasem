import { Link } from "react-router-dom";
import image from "../../assets/rest/image3.jpeg";

const Trips = () => {
  return (
    <section id="Trips" className="d-flex text-white flex-column">
      <h2 className="text-center fs-1 mb-1">Nasze Wycieczki</h2>
      <div className="wycieczki d-flex">
        <article className="border rounded-4 p-4 border-2 border-light">
          <h3 className="fs-3 mb-3 text-warning">Safari w Tsavo East z polskojęzycznym przewodnikiem</h3>
          <p>2-dniowe safari w Tsavo East, jednym z największych parków narodowych w Kenii.</p>
          <ul>
            <li className="mb-1 fs-6">Cena: 210$ vanem lub 250$ jeepem (przy pełnym samochodzie)</li>
            <li className="fs-6">Dzieci do 10 lat: 50% ceny</li>
          </ul>
          <h4 className="fs-5 text-primary">Plan wycieczki:</h4>
          <h5 className="fs-5 text-success">Dzień 1</h5>
          <ul>
            <li className="mb-1 fs-6">5:30-6:30 - Odbiór z hotelu</li>
            <li className="mb-1 fs-6">10:00 - Krótki postój na kawę i toaletę</li>
            <li className="mb-1 fs-6">10:00-10:30 - Wjazd do parku, oglądanie zwierząt</li>
            <li className="mb-1 fs-6">14:00 - Zakwaterowanie w VOI Wildlife Lodge, lunch, czas wolny</li>
            <li className="mb-1 fs-6">16:00 - Popołudniowe safari (game drive)</li>
            <li className="fs-6">18:30 - Powrót do hotelu, kolacja, nocleg</li>
          </ul>
          <h5 className="fs-5 text-success">Dzień 2</h5>
          <ul>
            <li className="mb-1 fs-6">6:30 - Śniadanie, wykwaterowanie</li>
            <li className="mb-1 fs-6">7:00-10:00 - Poranne safari (game drive)</li>
            <li className="mb-1 fs-6">10:00 - Wyjazd z parku, wizyta w wiosce Masajów (gratis)</li>
            <li className="fs-6">15:00 - Powrót do hoteli</li>
          </ul>
          <p>
            W cenie: transport, wstęp do parków, pełne wyżywienie, nocleg, wizyta w wiosce Masajów, przewodnik
            polskojęzyczny.
          </p>
        </article>
        <div>
          <article className="border rounded-4 p-4 m-5 border-2 border-light">
            <h3 className="fs-3 mb-3 text-warning">Wycieczka do Mombasy</h3>
            <p>Jednodniowa wycieczka do Mombasy z przewodnikiem, zwiedzanie najważniejszych atrakcji miasta.</p>
            <ul>
              <li className="fs-6">Cena: od 35$ przy 6 osobach, 45$ przy 4 osobach, 55$ przy 2 osobach</li>
            </ul>
            <h4 className="fs-5 text-primary">Plan wycieczki:</h4>
            <ul>
              <li className="mb-1 fs-6">6:30 - Odbiór z hoteli</li>
              <li className="mb-1 fs-6">Spacer po starym mieście: Mombasa Tusks, Fort Jesus (zwiedzanie z zewnątrz)</li>
              <li className="mb-1 fs-6">Wizyta w pracowni Akamba, gdzie można zakupić ręcznie wykonane pamiątki</li>
              <li className="fs-6">Targowisko z owocami, warzywami, przyprawami</li>
            </ul>
          </article>
          <div className="div__main__img d-flex justify-content-center align-items-center">
            <img
              loading="lazy"
              className="main__img"
              src={image}
              alt="Żyrafa i słoń stojące naprzeciwko siebie pod rozłożystym drzewem akacji na tle zachodzącego słońca."
            />
          </div>
        </div>
      </div>
      <Link id="btnContact" to="/contact" className="btn rounded-4 btn-primary position-relative border-0">
        Jeśli chcesz dowiedzieć się więcej, skontaktuj się z nami!
      </Link>
    </section>
  );
};

export default Trips;
