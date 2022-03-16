export const getPortionOfDay = () => {
  const time = new Date().getHours();

  if (time >= 0 && time < 12) {
    return 'Morning' as string;
  } else if (time >= 12 && time < 19) {
    return 'Afternoon' as string;
  } else if (time >= 19 && time < 24) {
    return 'Evening' as string;
  }

  return null;
};
