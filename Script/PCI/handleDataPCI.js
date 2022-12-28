const { execSync } = require("child_process");
const data = execSync("lspci -mm ").toString();

const strToArr = (str) => {
  const arr = [];
  str.split("-r").forEach((item, index) => {
    if (index === 0) {
      item.split('"').forEach((item, index) => {
        if (index === 0 || index % 2 == 1) {
          arr.push(item.trim());
        }
      });
    } else {
      arr.push(item.slice(0, 2));
    }
  });
  return arr;
};

export const arrayInfo = () => {
  const array1 = data.split("\n");
  const array2 = [];
  array1.forEach((item) => {
    array2.push(strToArr(item));
  });
  array2.pop();
  array2.pop();
  return array2;
};
