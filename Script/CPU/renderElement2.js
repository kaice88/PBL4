import { objInfo } from "./handleDataCPU2.js";
const cpu1 = document.querySelector(" .cpu .cpu1");
const cpu2 = document.querySelector(" .cpu .cpu2");

const name = [
  "User",
  "System",
  "Nice",
  "Idle",
  "IO Wait",
  "Hardware Irq",
  "Software Irq",
  "Steal",
];
function createElement() {
  var str1 = ``;
  var str2 = ``;
  Object.values(objInfo()).forEach((item, i) => {
    if (i <= 3) {
      str1 += `<th class="solid-line">
      <h4>${name[i]}</h4>
      <h2>${item}%</h2>
      </th>`;
    } else {
      str2 += `<th>
      <h4>${name[i]}</h4>
      <h2>${item}%</h2>
      </th>`;
    }
  });
  cpu1.innerHTML = str1;
  cpu2.innerHTML = str2;
}

var set = setInterval(() => {
  createElement();
}, 500);
