"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Robot } from "./Robotglb";
import { Suspense } from "react";
const RobotDisplay = () => {
  return (
    <Canvas shadows camera={{ position: [0, 4, 7], fov: 45 }}>
      <ambientLight intensity={0.5} color="#fff4e6" />

      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffd9b3"
      />

      {/* <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      /> */}
      <Suspense fallback={null}>
        

        <group
          scale={10.33}
          position={[0, -4.29, 0]}
          castShadow
          rotation={[-0.6, 0, 0]}

        >
          <Robot />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default RobotDisplay;
