import { MaterialInst } from "../construct";
import { fromFeet, fromInches, toFeet } from "../util";

export const postConstructor = (
  widthposts: number,
  lengthposts: number,
  height: number
) => {
  if (![8, 12, 16].includes(toFeet(height))) {
    throw new Error(`Invalid height: ${height}`);
  }

  const posts: MaterialInst[] = [];
  console.log(height);

  for (let x = 0; x <= widthposts; x++) {
    posts.push({
      width: fromInches(5.5),
      length: fromInches(5.5),
      height: height,
      x: fromFeet(x * 8),
      y: height / 2,
      z: fromFeet(0),
      type: "post",
      purpose: "post",
    });
    posts.push({
      width: fromInches(5.5),
      length: fromInches(5.5),
      height: height,
      x: fromFeet(x * 8),
      y: height / 2,
      z: fromFeet(lengthposts * 8),
      type: "post",
      purpose: "post",
    });
  }
  for (let y = 1; y < lengthposts; y++) {
    posts.push({
      width: fromInches(5.5),
      length: fromInches(5.5),
      height: height,
      x: fromFeet(0),
      y: height / 2,
      z: fromFeet(y * 8),
      type: "post",
      purpose: "post",
    });
    posts.push({
      width: fromInches(5.5),
      length: fromInches(5.5),
      height: height,
      x: fromFeet(widthposts * 8),
      y: height / 2,
      z: fromFeet(y * 8),
      type: "post",
      purpose: "post",
    });
  }
  return posts;
};
