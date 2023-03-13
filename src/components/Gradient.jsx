import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { GradientTexture } from "@react-three/drei";

function Gradient(props) {
  const mesh = useRef();

//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh>
      <planeGeometry />
      <meshBasicMaterial>
        <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={["aquamarine", "hotpink"]} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
        />
      </meshBasicMaterial>
    </mesh>
  );
}

export default Gradient;
