import { arrayInfo } from "./handleDataProcesses.js";
import { objInfo } from "../Memory/handleDataMem2.js";

const table = document.querySelector(".tableProcesses");
const tasks = document.querySelectorAll(".task_content .number");
function createElement() {
  var str1 = `<thead><tr class="title_table">`;
  var str2 = `<tbody>`;
  arrayInfo()[0].forEach((item) => {
    str1 += `<th>${item}</th>`;
  });
  str1 += `</tr></thead>`;

  arrayInfo().forEach((item, index) => {
    if (index > 0) {
      var str3 = `<tr class="normal_table">`;
      item.forEach((i, id) => {
        str3 += `<td>${i}</td>`;
      });
      str3 += `</tr>`;
      str2 += str3;
    }
  });
  str2 += "</tbody>";
  table.innerHTML = str1 + str2;
  tasks.forEach((item, index) => {
    item.innerHTML = Object.values(objInfo(1))[index];
  });
}
var set = setInterval(() => {
  createElement();
}, 500);
