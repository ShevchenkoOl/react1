import { Dashboard } from "../components/Dashboard/Dashboard";
import { Headr } from "../components/Headr/Headr";
import { smartHomeData } from "../../smartHomeData";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="container">
      <Headr title="Chytrý dům" />
      <Dashboard data={smartHomeData} />
    </div>
  );
};
