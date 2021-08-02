// all tests passing

const ftoc = function(tempF) {
  let tempC = tempF - 32;
  tempC *= 5/9;
  if (!Number.isInteger(tempC)) {
    return +tempC.toFixed(1);
  } else {
    return tempC;
  }
};

const ctof = function(tempC) {
  let tempF = tempC * 9 / 5;
  tempF += 32;
  if (!Number.isInteger(tempF)) {
    return +tempF.toFixed(1);
  } else {
    return tempF;
  }
};


module.exports = {
  ftoc,
  ctof
};
