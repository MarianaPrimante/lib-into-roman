const lib = require("../lib/index");
const expect = require("chai").expect;

describe("intoToRoman", () => {
  it("valid", () => {
    expect(lib.intoToRoman(112)).to.be.equal("CXII");
  });
  it("valid", () => {
    expect(lib.intoToRoman("14")).to.be.equal("XIV");
  });
  it("valid", () => {
    expect(lib.intoToRoman(3999)).to.be.equal("MMMCMXCIX");
  });
  it("invalid", () => {
    expect(lib.intoToRoman("aaa")).to.be.equal("Número não válido");
  });
  it("invalid", () => {
    expect(lib.intoToRoman("-1")).to.be.equal("Número não válido");
  });
  it("invalid", () => {
    expect(lib.intoToRoman(0)).to.be.equal("Número não válido");
  });
});

describe("romanToInt", () => {
  it("valid", () => {
    expect(lib.romanToInt("CXII")).to.be.equal(112);
  });
  it("valid", () => {
    expect(lib.romanToInt("XIV")).to.be.equal(14);
  });
  it("valid", () => {
    expect(lib.romanToInt("MMMCMXCIX")).to.be.equal(3999);
  });
  it("invalid", () => {
    expect(lib.romanToInt("aaa")).to.be.equal("Número não válido");
  });
  it("invalid", () => {
    expect(lib.romanToInt("xv")).to.be.equal("Número não válido");
  });
  it("invalid", () => {
    expect(lib.romanToInt("10")).to.be.equal("Número não válido");
  });
  it("invalid", () => {
    expect(lib.romanToInt(10)).to.be.equal("Número não válido");
  });
});