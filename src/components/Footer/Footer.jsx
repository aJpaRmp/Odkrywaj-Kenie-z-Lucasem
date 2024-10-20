import facebook from "../../assets/facebook.svg";

const Footer = () => {
  return (
    <footer className="d-flex   justify-content-between">
      <div className="socialmedia  d-flex align-items-center justify-content-center flex-wrap">
        <h4>Zapraszamy na:</h4>
        <h5>Odwiedź nas tutaj:</h5>
        <a href="https://www.facebook.com/ba.lucah.5" target="_blank">
          <img id="facebook__img" src={facebook} alt="Odwiedź nas na facebooku" />
        </a>
      </div>
      <div className="prawa__autorkie text-center d-flex flex-column">
        © 2024 LukazzKeni Wszystkie prawa zastrzeżone. Lukaz z Keni jest bezpośrednim organizatorem wycieczek – Lukas
        jest lokalnym organizatorem wycieczek w Keni po polsku.
        <p id="author">Strona stworzona przez `Michał Pawłowski`</p>
      </div>
      <div className="telefon d-flex align-items-center justify-content-center">
        Telefon w Polsce:
        <a className="tel link-offset-2 link-underline link-underline-opacity-0 link-light" href="tel:+48 793740805">
          <strong> +48 793740805</strong>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
