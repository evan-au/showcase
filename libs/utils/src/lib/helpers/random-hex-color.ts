export const generateRandomHexColor = ({ hash = true }) => {
  return hash
    ? `#${Math.floor(Math.random() * 16777215).toString(16)}`
    : Math.floor(Math.random() * 16777215).toString(16);
};
