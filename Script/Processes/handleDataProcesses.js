const { execSync } = require("child_process");

const strToArr = (str) => {
  const arr = [];
  str.split(/\s+/).forEach((item, i) => {
    arr.push(item.trim());
  });
  return arr;
};

// const sortAsc = (arr) => {
//   for (let i = 1; i < arr.length - 1; i++) {
//     let idmin = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (parseInt(arr[j][0], 10) > parseInt(arr[idmin][0], 10)) idmin = j;
//     }

//     // swap
//     let t = arr[i];
//     arr[i] = arr[idmin];
//     arr[idmin] = t;
//   }
//   return arr;
// };
export const arrayInfo = (str) => {
  var data = "";
  try {
    data = execSync(str).toString();
  } catch (err) {
    data = "error";
  }
  if (data == "error") {
    return data;
  }
  const arr = [];
  const array = data.split("\n");
  for (let i = 6; i < array.length; i++) {
    arr.push(strToArr(array[i]).slice(1));
  }
  return arr;
};
