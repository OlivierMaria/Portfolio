import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";

export default function Hero() {
  const lottieRef = useRef();

  return (
    <section className="hero__wrapper flex" id="about">
      <div className="left__section">
        <div className="avatar__wrapper flex">
          <img src="./me.png" className="avatar" alt="" />
          <div className="icon-bulb"></div>
        </div>

        <h1 className="title">Développeur Web JavaScript Full Stack.</h1>
        <p className="subtitle">
          En tant que développeur web Full Stack spécialisé en JavaScript, je
          transforme les concepts en solutions web percutantes. Grâce à ma
          maîtrise de React, Node.js, Next.js et Express, je crée des
          expériences numériques qui captivent les utilisateurs, renforcent la
          présence en ligne et stimulent la croissance de votre entreprise. Prêt
          à façonner votre succès en ligne.
        </p>

        <div className="icons__wrapper flex">
          <div className="icon icon-github-square">
            <a href="https://github.com/OlivierMaria"></a>
          </div>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>
      <div className="right__section animation">
        <Lottie
          className=""
          lottieRef={lottieRef}
          onLoadedImages={() => {
            //https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
}
