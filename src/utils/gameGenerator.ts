export function generateGame(min: number, max: number, range: number): number[] {
  const numbers: number[] = [];
  while (numbers.length < min) {
    const num = Math.floor(Math.random() * range) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers.sort((a, b) => a - b);
}