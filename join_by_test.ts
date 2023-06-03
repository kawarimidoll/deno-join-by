import { assertEquals } from "https://deno.land/std@0.189.0/testing/asserts.ts";
import { joinBy } from "./join_by.ts";

Deno.test({
  name: "[joinBy] no mutation",
  fn() {
    const arrayA = [1, 2, 3];
    joinBy(arrayA, () => "_");

    assertEquals(arrayA, [1, 2, 3]);
  },
});

Deno.test({
  name: "[joinBy] empty input",
  fn() {
    assertEquals(joinBy([], () => "_"), "");
  },
});

Deno.test({
  name: "[joinBy] constant separator",
  fn() {
    assertEquals(joinBy([1, 3, 5, 6], () => "a"), "1a3a5a6");
  },
});

Deno.test({
  name: "[joinBy] empty separator",
  fn() {
    assertEquals(joinBy([1, 3, 5, 6], () => {}), "1,3,5,6");
  },
});

Deno.test({
  name: "[joinBy] join by elements",
  fn() {
    assertEquals(
      joinBy([1, 16, 9, 4, 25], (p, c) => p > c ? " > " : " < "),
      "1 < 16 > 9 > 4 < 25",
    );
  },
});

Deno.test({
  name: "[joinBy] join by index",
  fn() {
    assertEquals(
      joinBy(["a", "b", "c", "d", "e"], (_p, _c, i) => i % 2 === 0 ? "-" : "_"),
      "a-b_c-d_e",
    );
  },
});
