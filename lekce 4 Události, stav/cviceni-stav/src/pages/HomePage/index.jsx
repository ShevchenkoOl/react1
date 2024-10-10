import { Uloha1 } from "../../components/Uloha1";
import { Uloha2 } from "../../components/Uloha2";
import { Uloha3 } from "../../components/Uloha3";
import { Uloha4 } from "../../components/Uloha4";
import { Uloha5 } from "../../components/Uloha5";
import { Uloha6 } from "../../components/Uloha6";
import { Uloha7 } from "../../components/Uloha7";
import { Uloha8 } from "../../components/Uloha8";
import { ZaverecnyBonus1 } from "../../components/ZaverecnyBonus1";
import { ZaverecnyBonus2 } from "../../components/ZaverecnyBonus2";
import { ZaverecnyBonus3 } from "../../components/ZaverecnyBonus3";
import { ZaverecnyBonus4 } from "../../components/ZaverecnyBonus4";
import "./style.css";

export const HomePage = () => (
  <>
    <h1>React stav</h1>
    <main>
      <article>
        <h2>Úloha 1</h2>
        <div className="content">
          <Uloha1 />
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
        <h2>Úloha 5</h2>
        <div className="content">
          <Uloha5 />
        </div>
      </article>
      <article>
        <h2>Úloha 6</h2>
        <div className="content">
          <Uloha6 />
        </div>
      </article>
      <article>
        <h2>Úloha 7</h2>
        <div className="content">
          <Uloha7 />
        </div>
      </article>
      <article>
        <h2>Úloha 8</h2>
        <div className="content">
          <Uloha8 />
        </div>
      </article>
      <article>
        <h2>Bonus 1</h2>
        <div className="content">
          <ZaverecnyBonus1 />
        </div>
      </article>
      <article>
        <h2>Bonus 2</h2>
        <div className="content">
          <ZaverecnyBonus2 />
        </div>
      </article>
      <article>
        <h2>Bonus 3</h2>
        <div className="content">
          <ZaverecnyBonus3 />
        </div>
      </article>
      <article>
        <h2>Bonus 4</h2>
        <div className="content">
          <ZaverecnyBonus4 />
        </div>
      </article>
    </main>
  </>
);
