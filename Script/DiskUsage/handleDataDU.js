const { execSync } = require("child_process");

// const duCmd = "cd ~/ && du -shx * | sort -hr";
// // console.log(data);
// const data1 = "";
// var key = `Downloads`;
// var str = `&& cd ${key}`;
// try {
//   data1 = execSync(`cd ~/ && cd top3  && du -shx * | sort -hr`).toString();
//   console.log(data1);
// } catch (er) {
//   data1 = "Error";
//   // console.log("loi ne " + er + " loi ne");
// }

const arrayInfo = (str) => {
  var data = "Error";
  try {
    data = execSync(`cd ${str} && du -shx */ -t 100M| sort -hr`).toString();
    // console.log(data1);
  } catch (er) {
    data = "Error";
    // console.log("loi ne " + er + " loi ne");
  }

  const array = [];
  data
    .split("\n")
    .slice(0, -1)
    .forEach((item) => {
      const arrItem = item.replace(/\s+/, "|").split("|");
      array.push(
        arrItem.reduce((arr, item) => {
          arr.push(item);
          return arr;
        }, [])
      );
    });
  return array;
  // }
  // return data;
};

export const objInfo = (str) => {
  if (arrayInfo(str).length !== 0) {
    return arrayInfo(str).reduce((obj, item) => {
      obj[item[1].slice(0, -1)] = item[0];
      return obj;
    }, {});
  }
  return "null";
};

// du lieu khi xuat ra co dang:
// const info = {
//   name: 'lieu',
//   age: 18,
// }
// khi xuar ra co dang:
// name   lieu
// age    18
