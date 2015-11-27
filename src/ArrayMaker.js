function arrayMaker(max) {
  if (isNaN(max)) {
    return null;
  } else if (max === 0) {
    return [];
  } else {
    var Values = [];
    for (var a = 1; a <= max; a++) {
      Values.push(a);
    }
    return Values;
  }
}
