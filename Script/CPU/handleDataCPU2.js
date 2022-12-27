const { execSync } = require("child_process");

// Lấy thông tin model name CPU
export const modelName = () => {
  return execSync(
    "lscpu | sed -nr '/Model name/ s/.*:\\s*(.*) @ .*/\\1/p'"
  ).toString();
};

const strToArr = (str) => {
  const newStr = str.replaceAll(", ", ".").replaceAll(",100", ".100");
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

const arrayInfo = () => {
  const data = execSync("top  1 -b -w512 -n 1").toString();
  const array1 = data.split("\n");
  const array2 = [];
  for (let i = 0; i < array1.length; i++) {
    if (i <= 5 && i >= 2) {
      array1[i].split(" %").forEach((item) => {
        array2.push(item.trim());
      });
    }
  }
  return array2;
};

export const objInfo = () => {
  const array = [];
  arrayInfo().forEach((item) => {
    array.push(
      strToArr(item)
        .slice(1)
        .reduce((obj, item) => {
          const arr = item.split(/\s+/);
          obj[arr[1]] = arr[0];
          return obj;
        }, {})
    );
  });
  return array;
};
