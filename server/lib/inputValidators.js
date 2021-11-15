const isTrueGT = (testVal) => (value) => {
  if (value > testVal) {
    return true;
  }
  return false;
};

const isTrueGTE = (testVal) => (value) => {
  if (value >= 0) {
    return true;
  }
  return false;
};

const isTrueInt = () => (value) => {
  if (typeof value !== 'number') {
    return false;
  }
  if (value % 1 !== 0) {
    return false
  }
  return true;
};

const isTrueLT = (testVal) => (value) => {
  if (value < testVal) {
    return true;
  }
  return false;
};

module.exports = {
  isTrueGT,
  isTrueGTE,
  isTrueInt,
  isTrueLT,
}