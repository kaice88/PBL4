import { objInfo } from "./handleDataMem.js";


const table = document.querySelector(".tableMem");
const str = ["Property", "Value"];
function createElement() {
  var str1 = `<tr class="title_table">`;
  var str2 = ``;
  str.forEach((item) => {
    str1 += `<th>${item}</th>`;
  });
  str1 += `</tr>`;

  Object.keys(objInfo()).forEach((item, index) => {
    var str3 = `<tr class="normal_table">`;
    str3 += `<td>${item}</td><td>${objInfo()[item]}</td></tr>`;
    str2 += str3;
  });

  table.innerHTML = str1 + str2;
}

createElement();
