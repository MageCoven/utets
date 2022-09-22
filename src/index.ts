export function random(min?: number, max?: number): number {
  if (typeof min === 'undefined' && typeof max === 'undefined') {
    return Math.random();
  } else if (typeof min === 'number' && typeof max === 'number') {
    return Math.random() * (max - min) + min;
  }

  throw new Error(
    `Arguments expected [number, number] or [undefined, undefined] not [${typeof min}, ${typeof max}]`,
  );
}
