import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xoqorkaq");

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
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Adresse e-mail:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
              placeholder="Adresse e-mail"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Votre message:</label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Envoie en cours..." : "Envoyer"}
          </button>
          {state.succeeded && (
            <h1 style={{ fontSize: "16px", marginTop: "1.7rem" }}>
              Votre message a été envoyé avec succès. 👌🏻
            </h1>
          )}
        </form>
        <div className="border animation">Animation</div>
      </div>
    </section>
  );
}
