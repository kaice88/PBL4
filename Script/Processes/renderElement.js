import { arrayInfo } from "./handleDataProcesses.js";
const table = document.querySelector(".tableProcesses");
function createElement() {
  var str1 = `<tr class="title_table">`;
  var str2 = ``;
  arrayInfo()[0].forEach((item) => {
    str1 += `<th>${item}</th>`;
  });
  str1 += `</tr>`;

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
  table.innerHTML = str1 + str2;
}
var set = setInterval(() => {
  createElement();
}, 500);
