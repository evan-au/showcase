export const generateRandomNumbers = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
