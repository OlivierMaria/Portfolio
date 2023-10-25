import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";

export default function Contact() {
  const [state, handleSubmit] = useForm("xoqorkaq");

  return (
    <section className="contact__wrapper">
      <h1 className="title" id="contact">
        <span className="icon-envelope"></span>
        Me contacter
      </h1>
      <p className="subtitle">
        Prêt à donner vie à vos projets ? Contactez-moi pour en savoir plus sur
        la manière dont nous pouvons travailler ensemble pour atteindre vos
        objectifs en ligne.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
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
              placeholder="Message"
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
            <p
              className="flex"
              style={{ fontSize: "16px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Votre message a été envoyé avec succès. 👌🏻
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie
            className="contact__animation"
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
}
