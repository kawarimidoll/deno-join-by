/**
 * Joins an array of items into a string, using a separator function.
 * @example
 * ```ts
 * import { joinBy } from "https://deno.land/x/join_by/join_by.ts"
 * joinBy([1, 16, 9, 4, 25], (p, c) => p > c ? " > " : " < ");
 * // "1 < 16 > 9 > 4 < 25"
 * ```
 */
export function joinBy<T>(
  array: readonly T[],
  separator: (previous: T, current: T, index: number) => string | void,
): string {
  if (array.length === 0) return "";

  let previous = array[0];
  let ret = `${previous}`;
  let index = 0;

  for (const current of array.slice(1)) {
    ret += `${separator(previous, current, index) ?? ","}${current}`;
    previous = current;
    index++;
  }

  return ret;
}
