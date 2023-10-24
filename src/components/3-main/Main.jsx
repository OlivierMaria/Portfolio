import "./main.css";
export default function Main() {
  return (
    <main className="flex">
      <section className="main__left flex">
        <button className="active">Tout les projets</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>NextJs</button>
        <button>Node & Express</button>
      </section>
      <section className="main__right flex">
        {["aa", "aaa", "cc", 1, 7].map((item) => {
          return (
            <article key={item} className="card">
              <img width={266} src="/01.jpg" alt="" />

              <div style={{ width: "266px" }} className="box__wrapper">
                <h1 className="title">Landing Page</h1>
                <p className="subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis sit{" "}
                </p>
                <div className="flex icons">
                  <div className="icon-link"></div>
                  <div className="icon-github"></div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
