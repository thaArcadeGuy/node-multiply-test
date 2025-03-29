import {assert} from "chai";
import { describe, it } from "node:test";

describe("Multiplication function", () => {
  it("should multiply two numbers correctly", () => {
    assert.strictEqual(multiply(1, 1), 1);
  });
});