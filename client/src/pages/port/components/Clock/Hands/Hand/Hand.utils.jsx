
export const getRotation = (
  value,
  base
) => {
  const transform = `rotate(${
    90 + (value / base) * 360
  }deg)`;

  return {
    transform,
    MozTransform: transform,
    WebkitTransform: transform,
  };
};
