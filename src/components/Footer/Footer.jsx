import facebook from "../../assets/icon/facebook.svg";

const Footer = () => {
  return (
    <footer className="d-flex border-top border-light border-1 text-white justify-content-between w-100">
      <div className="socialmedia  d-flex align-items-center justify-content-center flex-wrap">
        <h5>Odwiedź nas tutaj:</h5>
        <a href="https://www.facebook.com/ba.lucah.5" target="_blank">
          <img loading="lazy" className="m-1" id="facebook__img" src={facebook} alt="Odwiedź nas na facebooku" />
        </a>
      </div>
      <div className="prawa__autorkie text-center d-flex flex-column">
        <h6>
          © 2024 LukazzKeni Wszystkie prawa zastrzeżone. Lukas z Kenii jest bezpośrednim organizatorem wycieczek – Lukas
          jest lokalnym organizatorem wycieczek w Kenii po polsku.
        </h6>
        <p id="author" className="opacity-50">
          Strona stworzona przez `Michał Pawłowski`
        </p>
      </div>
      <div className="phone d-flex flex-column align-items-center justify-content-center">
        Telefon w Polsce:
        <a
          className="me-auto link-offset-2 link-underline link-underline-opacity-0 link-light"
          href="tel:+48 793740805"
        >
          <strong> +48 793740805</strong>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
