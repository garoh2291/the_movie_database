export function getPopularity(num) {
  if (num > 70) {
    return "green";
  } else if (num > 40 && num <= 70) {
    return "yellow";
  } else if (num <= 40 && num > 0) {
    return "red";
  } else {
    return "#c7c7c7";
  }
}

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
