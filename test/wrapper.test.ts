import {wrap} from "../src/wrapper";

describe("Wrapper", () => {
  it("returns empty string", () => {
    expect(wrap("", 1)).toEqual("");
  });

  it("returns string shorter than column", () => {
    expect(wrap("this", 10)).toEqual("this");
  });

  it("wrap two words after space", () => {
    expect(wrap("word word", 6)).toEqual("word\nword");
  })

  it("wrap three words after space", () => {
    expect(wrap("word word word", 6)).toEqual("word\nword\nword");
  })
});
