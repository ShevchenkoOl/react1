import "../../HomePage/style.css";
import { Blinds } from "../Blinds/Blinds";
import { Climate } from "../Climate/Climate";
import { Energy } from "../Energy/Energy";
import { Lights } from "../Lights/Lights";

export const Dashboard = ({data}) => {
  return (
    <main className="dashboard">
      <Lights lights={data.lights} />
      <Climate clima={data.climate}/>
      <Blinds state={data.state} />
      <Energy energy={data.energyConsumption}/>
    </main>
  );
};
