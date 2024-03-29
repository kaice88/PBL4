const { execSync } = require("child_process");

const strToArr = (str) => {
  const newStr = str.replaceAll(", ", ".");
  const arr = [];
  newStr.split(".").forEach((item, i) => {
    if (i === 0) {
      item.split(":").forEach((i) => {
        arr.push(i.trim());
      });
    } else {
      arr.push(item.trim());
    }
  });
  return arr;
};

const arrayInfo = (index) => {
  const data = execSync("top -b -n 1").toString();
  const array = data.split("\n");
  return strToArr(array[index]).slice(1);
};

export const objInfo = (index) =>
  arrayInfo(index).reduce((obj, item) => {
    const arr = item.split(/\s+/);
    obj[arr[1]] = arr[0];
    return obj;
  }, {});
