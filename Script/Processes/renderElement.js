import { arrayInfo } from "./handleDataProcesses.js";
import { objInfo } from "../Memory/handleDataMem2.js";

const table = document.querySelector(".tableProcesses");
const tasks = document.querySelectorAll(".task_content .number");

function createElement(str) {
  var str1 = `<thead><tr class="title_table">`;
  var str2 = `<tbody>`;
  var arr = arrayInfo(str);
  if (arr == "error") {
    table.innerHTML = "";
  } else {
    arr[0].forEach((item, index) => {
      str1 += `<th>${item}</th>`;
    });
    str1 += `</tr></thead>`;

    arr.forEach((item, index) => {
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
  }

  tasks.forEach((item, index) => {
    item.innerHTML = Object.values(objInfo(1))[index];
  });
}

var str = "";

window.onload = function () {
  function render() {
    var user = document.getElementById("user").value.toString();
    console.log(user);
    if (user != "") {
      str = `top -b -n 1 -u ${user}`;
      setInterval(() => {
        createElement(str);
      }, 500);
    } else {
      str = `top -b -n 1 `;
      setInterval(() => {
        createElement(str);
      }, 500);
    }
  }
  document.getElementById("button").onclick = render;
};
