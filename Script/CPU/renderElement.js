import { objInfo } from "./handleDataCPU.js";

const table = document.querySelector(".tableCPU");
const str = ["Property", "Value"];
function createElement() {
  var str1 = `<thead><tr class="title_table">`;
  var str2 = `<tbody>`;
  str.forEach((item) => {
    str1 += `<th>${item}</th>`;
  });
  str1 += `</tr></thead>`;

  Object.keys(objInfo()).forEach((item, index) => {
    var str3 = `<tr class="normal_table">`;
    str3 += `<td>${item}</td><td>${objInfo()[item]}</td></tr>`;
    str2 += str3;
  });
  str2 += '</tbody>';
  table.innerHTML = str1 + str2;
}

createElement();
