import { useContext } from "react";
import { StateContext } from "./StateContainer";

export const useGlobalState = () => {
  const state = useContext(StateContext);
  return state;
};

export const useWidthposts = () => {
  const { widthposts, setWidthposts } = useContext(StateContext);
  return [widthposts, setWidthposts] as const;
};

export const useLengthposts = () => {
  const { lengthposts, setLengthposts } = useContext(StateContext);
  return [lengthposts, setLengthposts] as const;
};

export const useHiddenLayers = () => {
  const { hiddenLayers, setHiddenLayers } = useContext(StateContext);
  return [hiddenLayers, setHiddenLayers] as const;
};

export const useGirtSpacing = () => {
  const { girtSpacing, setGirtSpacing } = useContext(StateContext);
  return [girtSpacing, setGirtSpacing] as const;
};
