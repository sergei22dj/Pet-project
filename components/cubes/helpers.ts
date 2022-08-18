// styledHelper
const cubeWidth = 52;

export const columnPadding = (cubeIndex: number, columns: number) => {
  if (cubeIndex !== 0.1) {
    if (cubeIndex < columns) {
      return cubeIndex * cubeWidth;
    } else {
      return (cubeIndex % columns) * cubeWidth;
    }
  } else {
    return 0;
  }
};
export const stringPadding = (cubeIndex: number, columns: number, strings: number) => {
  const calcDistance = Math.floor(cubeIndex / columns) * cubeWidth;

  if (cubeIndex !== 0.1) {
    if (calcDistance >= strings * cubeWidth) {
      return 0;
    } else {
      return calcDistance;
    }
  } else {
    return 0;
  }
};
