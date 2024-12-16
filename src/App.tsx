import Alert from "./Components/UI/Alerts/Alert";
import "./App.css";
import {
  BellRing,
  Info,
  LaptopMinimalCheck,
  TriangleAlert,
} from "lucide-react";

function App() {
  return (
    <>
      <div>
        <Alert title={"Alert-Denger"} icon={<BellRing />} type="alert-denger">
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
          facilis. Tenetur facere a, {""}
          <a href="/">EDO</a>, sit ipsam explicabo nesciunt et assumenda ullam
          aperiam minima odit pariatur dolores, quasi"
        </Alert>
      </div>
      <br />
      <div>
        <Alert
          title={"Alert-success"}
          type="alert-success"
          icon={<LaptopMinimalCheck />}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
        facilis. Tenetur facere a, corporis fuga sequi , sit ipsam explicabo
        nesciunt et assumenda ullam aperiam minima odit pariatur dolores, quasi"
        />
      </div>
      <br />
      <div>
        <Alert
          title={"Alert-Wraning"}
          type="alert-wraning"
          icon={<TriangleAlert />}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
        facilis. Tenetur facere a, corporis fuga sequi, sit ipsam explicabo
        nesciunt et assumenda ullam aperiam minima odit pariatur dolores, quasi"
        />
      </div>
      <br />
      <div>
        <Alert
          title={"Alert-Info"}
          type="alert-info"
          icon={<Info />}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
        facilis. Tenetur facere a, corporis fuga sequi, sit ipsam explicabo
        nesciunt et assumenda ullam aperiam minima odit pariatur dolores, quasi"
        />
      </div>
    </>
  );
}

export default App;
