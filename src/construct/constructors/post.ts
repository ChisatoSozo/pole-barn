import { MaterialInst } from "../construct";
import { fromInches, toFeet } from "../util";
import { postSpacing } from "./utils";

export const postConstructor = (
  widthposts: number,
  lengthposts: number,
  height: number
) => {
  if (![8, 12, 16].includes(toFeet(height))) {
    throw new Error(`Invalid height: ${height}`);
  }

  const points = postSpacing(widthposts, lengthposts);

  const posts: MaterialInst[] = points.map((point) => ({
    width: fromInches(5.5),
    length: fromInches(5.5),
    height: height,
    y: height / 2,
    type: "post",
    purpose: "post",
    ...point,
  }));

  return posts;
};
