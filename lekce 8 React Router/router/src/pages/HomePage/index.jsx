import "./style.css";
import { Link, Outlet } from "react-router-dom";
export const HomePage = () => {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <main>
        <Link to="/invoices">Invoices</Link>
        <br />
        <Link to="/exponces">exponcesPage</Link>
      </main>
      <Outlet></Outlet>
      <footer
        style={{
          backgroundColor: "#f1f1f1",
          color: "#333"
        }}
      >
        <p>💟2024 MyApp</p>
      </footer>
    </div>
  );
};
