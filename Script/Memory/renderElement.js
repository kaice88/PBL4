import { objInfo } from "./handleDataMem.js";
const properties = document.querySelector(" .mem-structure .property");
const values = document.querySelector(" .mem-structure .value");
function createElement() {
  var str1 = `<h6>Thông số</h6>`;
  var str2 = `<h6>Giá trị</h6>`;
  Object.keys(objInfo()).forEach((key) => {
    str1 += `<li>${key.toString().trim()}</li>`;
  });
  properties.innerHTML = str1;
  Object.values(objInfo()).forEach((value) => {
    str2 += `<li>${value.toString().trim()}</li>`;
  });
  values.innerHTML = str2;
}
createElement();
