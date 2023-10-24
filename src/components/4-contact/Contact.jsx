import "./contact.css";

export default function Contact() {
  return (
    <section className="contact__wrapper">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Me contacter
      </h1>
      <p className="subtitle">
        Prêt à donner vie à vos projets ? Contactez-moi pour en savoir plus sur
        la manière dont nous pouvons travailler ensemble pour atteindre vos
        objectifs en ligne.
      </p>

      <div className="flex">
        <form>
          <div className="flex">
            <label htmlFor="email">Adresse e-mail:</label>
            <input
              required
              type="email"
              name=""
              id="email"
              placeholder="Adresse e-mail"
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Votre message:</label>
            <textarea
              required
              name=""
              id="message"
              placeholder="message"
            ></textarea>
          </div>
          <button className="submit">Envoyer</button>
        </form>
        <div className="border animation">Animation</div>
      </div>
    </section>
  );
}
