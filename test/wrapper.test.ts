import {wrap} from "../src/wrapper";

describe("Wrapper", () => {
  it("returns empty string", () => {
    expect(wrap("", 1)).toEqual("");
  });

  it("returns string shorter than column", () => {
    expect(wrap("word", 10)).toEqual("word");
  });

  it("split one word", () => {
    expect(wrap("word", 2)).toEqual("wo\nrd");
  });

  it("splits one word many times", () => {
    expect(wrap("abcdefghij", 3)).toEqual("abc\ndef\nghi\nj");
  })

});
