import { createRoot } from "react-dom/client";
import { HomePage } from "./pages/HomePage";
import "./global.css";
import Headr from "./pages/Headr/Headr";
import Footer from "./pages/Footer/Footer";
import Main from "./pages/Main/Main";

const App = () => {

  const author = "Oleksii Shevchenko";
  return (
    <>
      <Headr title="Hello world" />
      <Main>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit magnam quasi nobis sequi corrupti quidem rerum amet, itaque ipsum laudantium est esse neque, accusantium in tempora ut velit blanditiis.</Main>
      <Footer author={author} />
    </>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
