import { assert } from "chai";
import multiply from "../multiply.js";
import { describe, it } from "node:test";

describe("Multiplication function", () => {
  it("should multiply two numbers correctly", () => {
    assert.strictEqual(multiply(4, 4), 16);
  });
});