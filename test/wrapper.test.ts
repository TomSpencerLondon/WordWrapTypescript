import {wrap} from "../src/wrapper";

describe("Wrapper", () => {
  it("returns empty string", () => {
    expect(wrap("", 1)).toEqual("");
  });

  it("returns string shorter than column", () => {
    expect(wrap("word", 10)).toEqual("word");
  });

  it("returns string shorter than column", () => {
    expect(wrap("word", 2)).toEqual("wo\nrd");
  });

});
