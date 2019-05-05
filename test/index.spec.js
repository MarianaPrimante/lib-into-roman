const lib = require("../index");
const expect = require("chai").expect;

describe("intoToRoman", () => {
  it("valid: 112 return CXII", () => {
    expect(lib.intoToRoman(112)).to.be.equal("CXII");
  });
  it("valid: '14' return XIV", () => {
    expect(lib.intoToRoman("14")).to.be.equal("XIV");
  });
  it("valid: 3999 return MMMCMXCIX", () => {
    expect(lib.intoToRoman(3999)).to.be.equal("MMMCMXCIX");
  });
  it("invalid: 'aaa' return 'Número não válido'", () => {
    expect(lib.intoToRoman("aaa")).to.be.equal("Número não válido");
  });
  it("invalid: '-1' return 'Número não válido'", () => {
    expect(lib.intoToRoman("-1")).to.be.equal("Número não válido");
  });
  it("invalid: 0 return 'Número não válido'", () => {
    expect(lib.intoToRoman(0)).to.be.equal("Número não válido");
  });
});

describe("romanToInt", () => {
  it("valid: 'CXII' return 112", () => {
    expect(lib.romanToInt("CXII")).to.be.equal(112);
  });
  it("valid: 'XVI' return 14", () => {
    expect(lib.romanToInt("XIV")).to.be.equal(14);
  });
  it("valid: 'MMMCMXCIX' return 3999", () => {
    expect(lib.romanToInt("MMMCMXCIX")).to.be.equal(3999);
  });
  it("invalid: 'aaa' return 'Número não válido'", () => {
    expect(lib.romanToInt("aaa")).to.be.equal("Número não válido");
  });
  it("invalid: 'xv' return 'Número não válido'", () => {
    expect(lib.romanToInt("xv")).to.be.equal("Número não válido");
  });
  it("invalid: '10' return 'Número não válido'", () => {
    expect(lib.romanToInt("10")).to.be.equal("Número não válido");
  });
  it("invalid: 10 return 'Número não válido'", () => {
    expect(lib.romanToInt(10)).to.be.equal("Número não válido");
  });
});