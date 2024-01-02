import { Color3 } from "@babylonjs/core";
import { MaterialType } from "./construct";

export const renderMap: {
  [key in MaterialType]: Color3;
} = {
  post: Color3.FromHexString("#8B4513"),
  postBase: new Color3(0.3, 0.3, 0.3),
  wood2x6: Color3.FromHexString("#8B4513"),
  post3x2x6x16: Color3.FromHexString("#8B4513"),
};
