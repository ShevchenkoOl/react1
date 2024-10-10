import { Uloha1 } from "../../components/Uloha1";
import { Uloha2 } from "../../components/Uloha2";
import { Uloha3 } from "../../components/Uloha3";
import { Uloha4 } from "../../components/Uloha4";
import { ZaverecnyBonus1 } from "../../components/ZaverecnyBonus1";
import "./style.css";

export const HomePage = () => {

  const handleClick = () => {
    alert("Ahoj!");
  }

  return (
    <>
      <h1>React události</h1>
      <main>
        <article>
          <h2>Úloha 1</h2>
          <div className="content">
            <Uloha1 handleClick={handleClick}/>
          </div>
        </article>
        <article>
          <h2>Úloha 2</h2>
          <div className="content">
            <Uloha2 />
          </div>
        </article>
        <article>
          <h2>Úloha 3</h2>
          <div className="content">
            <Uloha3 />
          </div>
        </article>
        <article>
          <h2>Úloha 4</h2>
          <div className="content">
            <Uloha4 />
          </div>
        </article>
        <article>
          <h2>Bonus</h2>
          <div className="content">
            <ZaverecnyBonus1 />
          </div>
        </article>
      </main>
    </>
  );
};
