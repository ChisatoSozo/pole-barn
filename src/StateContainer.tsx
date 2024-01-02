import { createContext, useState } from "react";
import { MaterialType } from "./construct/construct";
import { fromFeet } from "./construct/util";

export type IState = {
  widthposts: number;
  setWidthposts: (widthposts: number) => void;
  lengthposts: number;
  setLengthposts: (lengthposts: number) => void;
  height: number;
  setHeight: (height: number) => void;
  hiddenLayers: MaterialType[];
  setHiddenLayers: (hiddenLayers: MaterialType[]) => void;
  girtSpacing: number;
  setGirtSpacing: (girtSpacing: number) => void;
};

export const StateContext = createContext<IState>({
  widthposts: 0,
  setWidthposts: () => {},
  lengthposts: 0,
  setLengthposts: () => {},
  height: 0,
  setHeight: () => {},
  hiddenLayers: [],
  setHiddenLayers: () => {},
  girtSpacing: 0,
  setGirtSpacing: () => {},
});

export const StateContainer = ({
  children,
  override,
}: {
  children: React.ReactNode;
  override?: Partial<IState>;
}) => {
  const [widthposts, setWidthposts] = useState(2);
  const [lengthposts, setLengthposts] = useState(4);
  const [height, setHeight] = useState(fromFeet(12));
  const [girtSpacing, setGirtSpacing] = useState(fromFeet(4));
  const [hiddenLayers, setHiddenLayers] = useState<MaterialType[]>([]);

  return (
    <StateContext.Provider
      value={{
        widthposts,
        setWidthposts,
        lengthposts,
        setLengthposts,
        height,
        setHeight,
        hiddenLayers,
        setHiddenLayers,
        girtSpacing,
        setGirtSpacing,
        ...override,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
