/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

// const infoCPU = `tuoi:20
//  ngay sinh:49
//  noi o:hoa tien`;
const { execSync } = require("child_process");
const infoDisk = execSync("df").toString();

const arrayInfo = () => {
  const array = [];
  infoDisk
    .slice(0, -1)
    .split("\n")
    .forEach((item) => {
      array.push(item);
    });
  return array;
};
// console.log(arrayInfo(infoDisk));
const splitStr = (str) => {
  const arr = [];
  str.split(/\s+/).forEach((item) => {
    arr.push(item);
  });
  return arr;
};
export const arrInfo = () => {
  const arr = [];
  arrayInfo()
    .splice(1, arrayInfo().length - 1)
    .forEach((item) => {
      arr.push(splitStr(item));
    });
  return arr;
};
// du lieu khi xuat ra co dang:
// const info = [["name", "age","class"],["chi","17","20T2"],["linh","17","20T2"]]
// khi xuar ra co dang:
// name age class
// chi  17  20T2
// linh  17  20T2
