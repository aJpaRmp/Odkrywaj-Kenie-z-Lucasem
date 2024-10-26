import image from "../../assets/gallery/img21.jpg";

const Contact = () => {
  return (
    <section className="d-flex" id="Contact">
      <div className="contact_img">
        <img src={image} alt="" />
      </div>
      <form className="xd d-flex flex-column" action="">
        <h3 className="text-center">Zapytaj o cenę i zaplanuj swoją wycieczkę</h3>
        <div className="form__group d-flex flex-column">
          <label htmlFor="email">Twój Email:</label>
          <input className="form__input" type="text" placeholder="Twój Email" />
        </div>
        <div className="form__group d-flex flex-column">
          <label htmlFor="wiadomość">Treść wiadomości:</label>
          <textarea className="form__input" name="wiadomość" id="tresc" placeholder="Treść wiadomości" />
        </div>
        <button type="submit">Wyślij</button>
      </form>
    </section>
  );
};

export default Contact;
