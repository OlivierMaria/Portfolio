import { useState } from "react";
import { myProjects } from "./myProjects.js";
import "./main.css";

export default function Main() {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });
      return ZZZ === buttonCategory;
    });
    setArr(newArr);
  };
  return (
    <main className="flex">
      <section className="main__left flex">
        <button
          onClick={() => {
            setCurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          Tout les projets
        </button>
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("javascript");
          }}
          className={currentActive === "javascript" ? "active" : null}
        >
          JavaScript
        </button>

        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handleClick("nextJs");
          }}
          className={currentActive === "nextJs" ? "active" : null}
        >
          NextJs
        </button>
        <button
          onClick={() => {
            handleClick("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
        </button>
      </section>
      <section className="main__right flex">
        {arr.map((item) => {
          return (
            <article key={item.imgPath} className="card">
              <img width={266} src={item.imgPath} alt="" />

              <div style={{ width: "266px" }} className="box__wrapper">
                <h1 className="title">{item.projectTitle}</h1>
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
