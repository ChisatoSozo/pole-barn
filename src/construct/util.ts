export const fromFeet = (feet: number) => {
  return feet * 0.3048;
};

export const toFeet = (meters: number) => {
  return meters / 0.3048;
};

export const fromFeetAndInches = (feetNum: number, inches: number) => {
  return fromFeet(feetNum + inches / 12);
};

export const toFeetAndInches = (meters: number) => {
  const feet = toFeet(meters);
  const feetNum = Math.floor(feet);
  const inches = Math.round((feet - feetNum) * 12);
  return { feet: feetNum, inches };
};

export const fromInches = (inches: number) => {
  return inches * 0.0254;
};

export const toInches = (meters: number) => {
  return meters / 0.0254;
};

export const round3SigFigs = (num: number) => {
  return Math.round(num * 1000) / 1000;
};
