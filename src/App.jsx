import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "./Box";
import{ChartComponent} from "./ChartComponent";
import {initialData} from "./ChartComponent";
import "./App.css";
import Box from "./Box";
function App(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ChartComponent {...props} data={initialData}></ChartComponent>

      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
