import { fromFeet, fromInches } from "../util";

const xPos = (x: number, widthPosts: number) => {
  if (x === 0) {
    return fromFeet(x * 8);
  }
  if (x === widthPosts) {
    return fromFeet(x * 8) - (fromInches(5.5 / 2) + fromInches(1.5)) * 2;
  }
  return fromFeet(x * 8) - (fromInches(5.5 / 2) + fromInches(1.5));
};
const yPos = (y: number, lengthPosts: number) => {
  if (y === 0) {
    return fromFeet(y * 8);
  }
  if (y === lengthPosts) {
    return fromFeet(y * 8) - fromInches(5.5 / 2) * 2;
  }
  return fromFeet(y * 8) - fromInches(5.5 / 2);
};

export const postSpacing = (
  widthposts: number,
  lengthposts: number
): {
  x: number;
  yRotation: number;
  z: number;
}[] => {
  const points: {
    x: number;
    yRotation: number;
    z: number;
  }[] = [];
  for (let x = 0; x < widthposts; x++) {
    points.push({
      x: xPos(x, widthposts),
      yRotation: Math.PI / 2,
      z: fromFeet(0),
    });
  }
  for (let y = 0; y < lengthposts; y++) {
    points.push({
      x: xPos(widthposts, widthposts),
      yRotation: 0,
      z: yPos(y, lengthposts),
    });
  }
  for (let x = widthposts; x > 0; x--) {
    points.push({
      x: xPos(x, widthposts),
      yRotation: Math.PI / 2,
      z: yPos(lengthposts, lengthposts),
    });
  }

  for (let y = lengthposts; y > 0; y--) {
    points.push({
      x: fromFeet(0),
      yRotation: 0,
      z: yPos(y, lengthposts),
    });
  }

  return points;
};
