import { expect, it, vi } from "vitest";

import { max } from "@/index";

it("returns the maximum of two numbers", () => {
  expect(max(3, 7)).toBe(7);
});

it("returns the maximum of negative numbers", () => {
  expect(max(-5, -2)).toBe(-2);
});

it("returns the maximum of zero and a number", () => {
  expect(max(0, 10)).toBe(10);
});

it("should call the Math.max function", () => {
  const spy = vi.spyOn(Math, "max");

  max(1, 2);
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
