export function random(): number;
export function random(min: number, max: number): number;
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

// Modified version of the function presented in https://ayrton.sparling.us/index.php/finally-a-bias-random-number-generator/
export function randomBiased(
    min: number,
    max: number,
    bias: number,
    influence: number,
): number {
    const _random = random(min, max);
    const difference = _random - bias;
    const mixer = influence != 0 ? Math.pow(Math.random(), 1 / influence) : 0;
    const toBeRemoved = difference * mixer;
    return _random - toBeRemoved;
}
