import image from "../../assets/gallery/img21.jpg";

const Contact = () => {
  return (
    <section className="d-flex w-100 h-100 p-3 m-3 mb-5" id="Contact">
      <div className="contact_img w-10 p-1">
        <img loading="lazy" src={image} alt="" />
      </div>
      <form
        className="rounded-4 rounded-3 text-white p-4 m-3 d-flex flex-column border border-2 border-light w-75 bg-transparent justify-content-center"
        action=""
      >
        <h3 className="text-center mb-4 fs-2 fw-bold">Zapytaj o cenę i zaplanuj swoją wycieczkę</h3>
        <div className="form__group d-flex flex-column">
          <label htmlFor="email" className="m-1 fw-bold">
            Twój Email:
          </label>
          <input className="form__input p-2 rounded-3 border border-2 border-light bg-transparent" type="text" />
        </div>
        <div className="form__group d-flex flex-column mb-5">
          <label htmlFor="wiadomość" className="fw-bold m-1">
            Treść wiadomości:
          </label>
          <textarea
            className="form__input rounded-3 border border-2 border-light bg-transparent"
            name="wiadomość"
            id="tresc"
          />
        </div>
        <button className="btn btn-light w-25 rounded-4 fw-bold text-white rounded-3 p-2 mx-auto mt-3" type="submit">
          Wyślij
        </button>
      </form>
    </section>
  );
};

export default Contact;
