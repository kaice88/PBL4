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

const infoCPU = execSync("lscpu").toString();
const arrayInfo = () => {
  const array = [];
  infoCPU
    .split("\n")
    .slice(0, -1)
    .forEach((item) => {
      const arrItem = item.split(":");
      array.push(
        arrItem.reduce((arr, item) => {
          arr.push(item);
          return arr;
        }, [])
      );
    });
  return array;
};

export const objInfo = () =>
  arrayInfo().reduce((obj, item) => {
    obj[item[0]] = item[1];
    return obj;
  }, {});
