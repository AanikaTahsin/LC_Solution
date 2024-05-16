function firstMissingPositive(args) {
  let cnt = 1;

  for (let arg of args) {
    if (arg == cnt) {
      cnt++;
    } else {
      return cnt;
    }
  }
  return cnt;
}

module.exports = firstMissingPositive;
