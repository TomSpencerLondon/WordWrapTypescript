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

  it("wrap word on word boundary", () => {
    expect(wrap("word word", 5)).toEqual("word\nword");
  });

  it("wrap after boundary", () => {
    expect(wrap("word word", 6)).toEqual("word\nword");
  });

  it("wrap well before word boundary", () => {
    expect(wrap("word word", 3)).toEqual("wor\nd\nwor\nd");
  });

  it("wrap just before word boundary", () => {
    expect(wrap("word word", 4)).toEqual("word\nword");
  });
});
