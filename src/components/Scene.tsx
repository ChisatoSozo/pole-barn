import { Vector3 } from "@babylonjs/core";
import { Scene as BJSScene, Engine } from "react-babylonjs";
import { MaterialInst, MaterialType } from "../construct/construct";
import { MaterialRender } from "./MaterialRender";

export const Scene = ({
  construction,
  hiddenLayers,
}: {
  construction: MaterialInst[];
  hiddenLayers: MaterialType[];
}) => {
  return (
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <BJSScene>
        <arcRotateCamera
          name="camera1"
          target={Vector3.Zero()}
          alpha={Math.PI / 2}
          beta={Math.PI / 4}
          radius={8}
          lowerRadiusLimit={1}
          wheelPrecision={50}
        />
        <hemisphericLight
          name="light1"
          intensity={1.0}
          direction={Vector3.Up()}
        />
        <directionalLight
          name="light2"
          intensity={0.7}
          direction={new Vector3(-1, -1, -0.8)}
        />
        {construction.map((x) =>
          hiddenLayers.includes(x.type) ? null : (
            <MaterialRender key={Math.random()} materialInst={x} />
          )
        )}
      </BJSScene>
    </Engine>
  );
};
