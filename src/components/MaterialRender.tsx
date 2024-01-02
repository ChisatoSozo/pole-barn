import { Color3, Mesh, Vector3 } from "@babylonjs/core";
import { useEffect, useState } from "react";
import { MaterialInst } from "../construct/construct";
import { renderMap } from "../construct/render";

export const MaterialRender = ({
  materialInst,
}: {
  materialInst: MaterialInst;
}) => {
  const position = new Vector3(materialInst.x, materialInst.y, materialInst.z);
  const rotation = new Vector3(
    materialInst.xRotation || 0,
    materialInst.yRotation || 0,
    materialInst.zRotation || 0
  );
  const color = renderMap[materialInst.type];

  const [box, setBox] = useState<Mesh | null>(null);

  useEffect(() => {
    if (box) {
      box.renderOutline = true;
    }
  }, [box]);

  return (
    <box
      name={materialInst.type}
      ref={setBox}
      size={1}
      height={materialInst.height}
      width={materialInst.width}
      depth={materialInst.length}
      position={position}
      rotation={rotation}
      outlineColor={Color3.Black()}
      outlineWidth={0.001}
    >
      <standardMaterial name={materialInst.type} diffuseColor={color} />
    </box>
  );
};
