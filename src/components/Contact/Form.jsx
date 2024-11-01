import image from "../../assets/gallery/img21.jpg";

const Contact = () => {
  return (
    <section className="d-flex w-100 h-100" id="Contact">
      <div className="contact_img w-10">
        <img loading="lazy" src={image} alt="" />
      </div>
      <form
        className="rounded-4 d-flex flex-column border border-2 border-light w-75 bg-transparent justify-content-center"
        action=""
      >
        <h3 className="text-center">Zapytaj o cenę i zaplanuj swoją wycieczkę</h3>
        <div className="form__group d-flex flex-column">
          <label htmlFor="email">Twój Email:</label>
          <input className="form__input border border-2 border-light bg-transparent" type="text" />
        </div>
        <div className="form__group d-flex flex-column">
          <label htmlFor="wiadomość">Treść wiadomości:</label>
          <textarea className="form__input border border-2 border-light bg-transparent" name="wiadomość" id="tresc" />
        </div>
        <button className="btn btn-light w-25 rounded-4 " type="submit">
          Wyślij
        </button>
      </form>
    </section>
  );
};

export default Contact;
