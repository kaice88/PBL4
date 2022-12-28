const { execSync } = require("child_process");

const infoCPU = execSync(
  "upower -i /org/freedesktop/UPower/devices/battery_BAT0"
).toString();
const arrayInfo = () => {
  const array = [];
  infoCPU
    .split("\n")
    .slice(0, 24)
    .forEach((item) => {
      const arrItem = item.split(":");
      array.push(
        arrItem.reduce((arr, item) => {
          arr.push(item.trim());
          return arr;
        }, [])
      );
    });
  return array;
};

export const objInfo = () =>
  arrayInfo().reduce((obj, item, index) => {
    if (index !== 8 && index !== 5) {
      obj[item[0]] = item[1];
    }
    return obj;
  }, {});
