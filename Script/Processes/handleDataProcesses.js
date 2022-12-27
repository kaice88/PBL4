const { execSync } = require("child_process");

const strToArr = (str) => {
  const arr = [];
  str.split(/\s+/).forEach((item, i) => {
    arr.push(item.trim());
  });
  return arr;
};

export const arrayInfo = () => {
  const data = execSync("top -b -n 1").toString();
  const arr = [];
  const array = data.split("\n");
  for (let i = 6; i < array.length; i++) {
    arr.push(strToArr(array[i]).slice(1));
  }
  return arr;
};
