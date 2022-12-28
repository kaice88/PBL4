const { execSync } = require("child_process");

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
