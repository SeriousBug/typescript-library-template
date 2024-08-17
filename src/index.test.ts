import { expect, test } from "vitest";
import { hello } from "./index";

test("Testing the hello function", () => {
  expect(hello()).toBe("Hello, World!");
});
