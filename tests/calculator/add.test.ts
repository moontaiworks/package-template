import { expect, it } from "vitest";

import { add } from "@/index";

it("adds two numbers", () => {
  expect(add(1, 2)).toBe(3);
});

it("adds negative numbers", () => {
  expect(add(-1, -2)).toBe(-3);
});

it("adds zero to a number", () => {
  expect(add(5, 0)).toBe(5);
});
