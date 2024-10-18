import { expect, it } from "vitest";

import { divide } from "@/index";

it("divides two numbers", () => {
  expect(divide(10, 2)).toBe(5);
});

it("divides negative numbers", () => {
  expect(divide(-10, -2)).toBe(5);
});

it("throws an error when dividing by zero", () => {
  expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});
