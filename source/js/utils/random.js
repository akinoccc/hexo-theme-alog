export function randomNum(min, max) {
  return min + Math.random() * (max - min);
}

export function randomColor() {
  const r = randomNum(0, 255);
  const g = randomNum(0, 255);
  const b = randomNum(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}