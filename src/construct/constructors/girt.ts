import { MaterialInst } from "../construct";
import { fromFeet, fromInches } from "../util";
import { postSpacing } from "./utils";

export const girtConstructor = (
  widthposts: number,
  lengthposts: number,
  height: number,
  girtSpacing: number
) => {
  const points = postSpacing(widthposts, lengthposts);
  const maxz = Math.max(...points.map((point) => point.z));
  const maxx = Math.max(...points.map((point) => point.x));
  const girts: MaterialInst[] = points
    .map((point, i) => {
      if (i % 2 === 1) {
        const girt = {
          width: fromInches(1.5),
          length: fromFeet(16),
          height: fromInches(5.5),
          y: fromInches(5.5 / 2),
          type: "wood2x6",
          purpose: "girt",
          ...point,
        };

        if (girt.x === 0) {
          girt.x -= fromInches(5.5 / 2) + fromInches(1.5 / 2);
        }
        if (girt.z === 0) {
          girt.z -= fromInches(5.5 / 2) + fromInches(1.5 / 2);
        }
        if (girt.x === maxx) {
          girt.x += fromInches(5.5 / 2) + fromInches(1.5 / 2);
        }
        if (girt.z === maxz) {
          girt.z += fromInches(5.5 / 2) + fromInches(1.5 / 2);
        }
        return girt;
      }
    })
    .filter((girt) => girt !== undefined) as MaterialInst[];

  const girts2: MaterialInst[] = points
    .map((point, i) => {
      if (i % 2 === 1) {
        const girt = {
          width: fromInches(1.5),
          length: fromFeet(16),
          height: fromInches(5.5),
          y: fromInches(5.5 / 2) + fromInches(5.5),
          type: "wood2x6",
          purpose: "girt",
          ...point,
        };

        if (girt.x === 0) {
          girt.x += fromInches(5.5 / 2) + fromInches(1.5 / 2);
          girt.y += fromInches(5.5);
        }
        if (girt.z === 0) {
          girt.z += fromInches(5.5 / 2) + fromInches(1.5 / 2);
        }
        if (girt.x === maxx) {
          girt.x -= fromInches(5.5 / 2) + fromInches(1.5 / 2);
          girt.y += fromInches(5.5);
        }
        if (girt.z === maxz) {
          girt.z -= fromInches(5.5 / 2) + fromInches(1.5 / 2);
        }

        return girt;
      }
    })
    .filter((girt) => girt !== undefined) as MaterialInst[];

  girts.push(...girts2);

  const originalGirts = [...girts];
  for (let y = girtSpacing; y < height; y += girtSpacing) {
    if (Math.abs(y - height) < 0.01) {
      y -= fromInches(5.5);
    }
    //copy y above
    for (const girt of originalGirts) {
      if (girt.y + y > height) {
        continue;
      }
      girts.push({
        ...girt,
        y: girt.y + y,
      });
    }
  }

  return girts;
};
