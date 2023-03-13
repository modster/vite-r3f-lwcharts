import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ChartComponent, initialData } from "./ChartComponent";
import "./App.css";
import Gradient from "./Components/Gradient";
function App(props) {
  const [count, setCount] = useState(0);

  return (
    <div className={'container'}>

        <ChartComponent {...props} data={initialData}>
          </ChartComponent>

    </div>
  );
}

export default App;
