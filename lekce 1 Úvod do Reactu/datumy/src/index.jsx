import { createRoot } from "react-dom/client";
import { HomePage } from "./pages/HomePage";
import "./global.css";
import Today from "./pages/HomePage/Today/Today";

const App = () => {
  return (
    <>
      <Today day="07" month="12" year="2020" />
      <Today day="20" month="05" year="2024" />
      <Today day="12" month="09" year="2024" />
    </>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
