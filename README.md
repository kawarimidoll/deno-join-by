# deno-join-by

Joins an array of items into a string, using a separator function.

```ts
import { joinBy } from "https://deno.land/x/join_by/join_by.ts"
joinBy([1, 16, 9, 4, 25], (p, c) => p > c ? " > " : " < ");
// "1 < 16 > 9 > 4 < 25"
```
