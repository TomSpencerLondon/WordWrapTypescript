import {wrap} from "../src/wrapper";

describe("Wrapper", () => {
  it("returns empty string", () => {
    expect(wrap("", 1)).toEqual("");
  });

  it("returns string shorter than column", () => {
    expect(wrap("this", 10)).toEqual("this");
  });


});
