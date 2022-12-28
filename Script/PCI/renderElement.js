import { arrayInfo } from "./handleDataPCI.js";

const table = document.querySelector(".tablePCI");
const str = ["BUS NUMBER", "CLASS", "VENDO", "NAME", "REVISION NUMBER"];
function createElement() {
  var str1 = `<thead><tr class="title_table">`;
  var str2 = `<tbody>`;
  str.forEach((item) => {
    str1 += `<th>${item}</th>`;
  });
  str1 += `</tr></thead>`;

  arrayInfo().forEach((item) => {
    var str3 = `<tr class="normal_table">`;
    item.forEach((item) => {
      str3 += `<td>${item}</td>`;
    });
    str2 += str3 + `</tr>`;
  });
  str2 += "</tbody>";
  table.innerHTML = str1 + str2;
}

createElement();
