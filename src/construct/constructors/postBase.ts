import { MaterialInst } from "../construct";
import { fromFeet, fromInches } from "../util";
import { postSpacing } from "./utils";

export const postBaseConstructor = (
  widthposts: number,
  lengthposts: number
) => {
  const points = postSpacing(widthposts, lengthposts);

  const postBases: MaterialInst[] = points.map((point) => ({
    width: fromInches(5),
    length: fromInches(5.94),
    height: fromInches(16.69),
    y: fromFeet(0),
    type: "postBase",
    purpose: "postBase",
    ...point,
  }));

  return postBases;
};
