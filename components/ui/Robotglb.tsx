

"use client";
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import { Group } from "three";

type GLTFResult = GLTF & {
  nodes: any;
  materials: any;
  animations: any;
};

export function Robot(props: GroupProps) {
  const group = useRef<Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/robotglb.glb"
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions.Scene) {
      actions.Scene.reset().fadeIn(0.5).play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* your robot meshes here using nodes + materials */}
      <group name="Sketchfab_Scene">
        <group name="RootNode" scale={0.002}>
          <group
            name="Robot_Origin"
            position={[0, 9.763, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <group name="Robot" position={[0, 0, 0.051]}>
              <mesh
                name="Robot_White_Glossy_0"
                castShadow
                receiveShadow
                geometry={nodes.Robot_White_Glossy_0.geometry}
                material={materials.White_Glossy}
                position={[0, 0.003, 1.908]}
                scale={1.506}
              />
              <mesh
                name="Robot_Blue_Light_0"
                castShadow
                receiveShadow
                geometry={nodes.Robot_Blue_Light_0.geometry}
                material={materials.Blue_Light}
                position={[0, -0.131, 1.944]}
                scale={1.389}
              />
              <mesh
                name="Robot_Black_Matt_0"
                castShadow
                receiveShadow
                geometry={nodes.Robot_Black_Matt_0.geometry}
                material={materials.Black_Matt}
                position={[0, -0.447, 2.749]}
                scale={0.546}
              />
            </group>

            <group
              name="Mouth"
              position={[0, -0.504, 2.573]}
              scale={[1, 1, 2.881]}
            >
              <mesh
                name="Mouth_Blue_Light_0"
                castShadow
                receiveShadow
                geometry={nodes.Mouth_Blue_Light_0.geometry}
                material={materials.Blue_Light}
                scale={0.061}
              />
            </group>

            <group name="Wave" position={[0, 0, 0.113]} scale={[1, 1, 0.186]}>
              <mesh
                name="Wave_Blue_Light_0"
                castShadow
                receiveShadow
                geometry={nodes.Wave_Blue_Light_0.geometry}
                material={materials.Blue_Light}
                scale={0.502}
              />
            </group>

            <group
              name="Wave002"
              position={[0, 0, 0.879]}
              scale={[1, 1, 0.889]}
            >
              <mesh
                name="Wave002_Blue_Light_0"
                castShadow
                receiveShadow
                geometry={nodes.Wave002_Blue_Light_0.geometry}
                material={materials.Blue_Light}
                scale={0.502}
              />
            </group>

            <group
              name="Wave001"
              position={[0, 0, -0.089]}
              scale={[1, 1, 0.001]}
            >
              <mesh
                name="Wave001_Blue_Light_0"
                castShadow
                receiveShadow
                geometry={nodes.Wave001_Blue_Light_0.geometry}
                material={materials.Blue_Light}
                scale={0.502}
              />
            </group>

            <group
              name="Wave003"
              position={[0, 0, 0.511]}
              scale={[1, 1, 0.552]}
            >
              <mesh
                name="Wave003_Blue_Light_0"
                castShadow
                receiveShadow
                geometry={nodes.Wave003_Blue_Light_0.geometry}
                material={materials.Blue_Light}
                scale={0.502}
              />
            </group>

            <group name="Ears" position={[0, 0, 2.967]}>
              <mesh
                name="Ears_Black_Matt_0"
                castShadow
                receiveShadow
                geometry={nodes.Ears_Black_Matt_0.geometry}
                material={materials.Black_Matt}
                position={[0, 0.027, 0.213]}
                scale={0.892}
              />
            </group>

            <group name="Empty" position={[0, -0.06, 2.786]}>
              <group name="Eyes" position={[0, -0.431, 0.076]}>
                <mesh
                  name="Eyes_Blue_Light_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Eyes_Blue_Light_0.geometry}
                  material={materials.Blue_Light}
                  position={[0, 0.025, -0.004]}
                  scale={0.434}
                />
              </group>
            </group>

            <group
              name="Hand_origin"
              position={[0.723, 0, 2.015]}
              rotation={[0, -0.064, 0]}
            >
              <group name="hANDS" position={[-0.723, 0, -1.963]}>
                <mesh
                  name="hANDS_White_Glossy_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.hANDS_White_Glossy_0.geometry}
                  material={materials.White_Glossy}
                  position={[0.891, 0, 1.415]}
                  scale={0.493}
                />
              </group>
            </group>

            <group
              name="Hand_origin002"
              position={[-0.723, 0, 2.015]}
              rotation={[0, 0.064, -Math.PI]}
            >
              <group name="hANDS002" position={[-0.723, 0, -1.963]}>
                <mesh
                  name="hANDS002_White_Glossy_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.hANDS002_White_Glossy_0.geometry}
                  material={materials.White_Glossy}
                  position={[0.891, 0, 1.415]}
                  scale={0.493}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/robotglb.glb");
