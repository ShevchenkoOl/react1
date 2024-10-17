import { Registrace } from "../../components/Registrace/Registrace";
import { Country } from "../../components/Country/Country";
import { Newslatter } from "../../components/Newsletter/Newsletter";
import { Ukol1 } from "../../components/Ukol1";
import { Ukol2 } from "../../components/Ukol2";
import { Ukol3 } from "../../components/Ukol3";
import { Ukol4 } from "../../components/Ukol4";
import "./style.css";

export const HomePage = () => {
  return (
    <>
      <h1>Cvičení data-binding</h1>
      <main>
        <article>
          <h2>Úkol 1</h2>
          <div className="content">
            <Ukol1 />
          </div>
        </article>
        <article>
          <h2>Úkol 2</h2>
          <div className="content">
            <Ukol2 />
          </div>
        </article>
        <article>
          <h2>Úkol 3</h2>
          <div className="content">
            <Ukol3 />
          </div>
        </article>
        <article>
          <h2>Úkol 4</h2>
          <div className="content">
            <Ukol4 />
          </div>
        </article>
        <article>
          <h2>Registrace</h2>
          <div className="content">
            <Registrace />
          </div>
        </article>
        <article>
          <h2>Výběr země</h2>
          <div className="content">
            <Country />
          </div>
        </article>
        <article>
          <h2>Zasílání newsletteru</h2>
          <div className="content">
            <Newslatter />
          </div>
        </article>
      </main>
    </>
  );
};
