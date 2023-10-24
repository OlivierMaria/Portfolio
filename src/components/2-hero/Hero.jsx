import "./hero.css";

export default function Hero() {
  return (
    <section className="hero__wrapper flex">
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
          <div className="icon icon-github-square"></div>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>
      <div className="right__section animation border">Animation</div>
    </section>
  );
}
