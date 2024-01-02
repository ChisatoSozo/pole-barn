import { IState } from "../StateContainer";
import { girtConstructor } from "./constructors/girt";
import { postConstructor } from "./constructors/post";
import { postBaseConstructor } from "./constructors/postBase";
import { prices } from "./prices";
import { toFeet } from "./util";

export type MaterialType = "post" | "post3x2x6x16" | "postBase" | "wood2x6";
export type Purpose = "girt" | "post" | "postBase";
export const purposes: {
  [key in Purpose]: boolean;
} = {
  girt: true,
  post: true,
  postBase: true,
};

export type MaterialInst = {
  width: number;
  length: number;
  height: number;
  x: number;
  y: number;
  z: number;
  xRotation?: number;
  yRotation?: number;
  zRotation?: number;
  type: MaterialType;
  purpose: Purpose;
};

export const costCalcMap: {
  [key in MaterialType]: (
    width: number,
    length: number,
    height: number
  ) => {
    price: number;
    url: string;
  };
} = {
  post: (_width, _length, height) => {
    const heightFeet = toFeet(height);
    switch (heightFeet) {
      case 8:
        return prices.post[8];
      case 12:
        return prices.post[12];
      case 16:
        return prices.post[16];
      default:
        throw new Error(`Invalid height: ${heightFeet}`);
    }
  },
  postBase: () => {
    return prices.postBase[0];
  },
  post3x2x6x16: () => {
    return prices.post3x2x6x16[16];
  },
  wood2x6: (_width, length) => {
    const lengthFeet = toFeet(length);
    if (lengthFeet <= 8) {
      return prices.wood2x6[8];
    }
    if (lengthFeet <= 16) {
      return prices.wood2x6[16];
    } else {
      throw new Error(`Invalid length for wood 2x6: ${lengthFeet}`);
    }
  },
};

export const construct = ({
  widthposts,
  lengthposts,
  height,
  girtSpacing,
}: IState) => {
  const materials: MaterialInst[] = [];
  materials.push(...postConstructor(widthposts, lengthposts, height));
  materials.push(...postBaseConstructor(widthposts, lengthposts));
  materials.push(
    ...girtConstructor(widthposts, lengthposts, height, girtSpacing)
  );

  return materials;
};
