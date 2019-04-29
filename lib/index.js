const numberRom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

const numberCard = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const intoToRoman = (number) => {
  let result = "";
  for (let num in numberCard) {
    while (number >= numberCard[num]) {
      result += numberRom[num];
      number -= numberCard[num];
    }
  } if (result === "") {
    return "Número não válido";
  } else {
    return result;
  }
};

const isLetter = (letter) => typeof letter === "string";

const romanToInt = (letter) => { 
  let result = 0;
  for (let rom in numberRom) {
    while (isLetter(letter) && letter.indexOf(numberRom[rom]) === 0) {
      result += numberCard[rom];
      letter = letter.replace(numberRom[rom], "");
    }
  } if (result === 0) {
    return "Número não válido";
  } else {
    return result;
  }
};

module.exports.romanToInt = romanToInt;
module.exports.intoToRoman = intoToRoman;