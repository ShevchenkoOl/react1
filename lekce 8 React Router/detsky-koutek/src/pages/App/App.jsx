import { Link, Outlet } from "react-router-dom";

export const App = () => {
    return (
      <div className="container">
        <header>
          <h1>Dětský koutek</h1>
        </header>
        <main>
            <Outlet></Outlet>
         <nav>
            <Link to="/homepage">Hpme Page</Link> <br />
            <Link to="/about">About</Link> <br />
            <Link to="/contact">Contact</Link>
         </nav>
        </main>
        <footer>
          <p>�� 2022 Dětský koutek. All rights reserved.</p>
        </footer>
      </div>
    );
  };
  