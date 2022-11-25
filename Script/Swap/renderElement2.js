import { objInfo } from "./handleDataSwap2.js";
const swap1 = document.querySelector(" .swap .swap1");
const swap2 = document.querySelector(" .swap .swap2");

const name = ["Total", "Free", "Used", "Avail Mem"];
function createElement() {
  var str1 = ``;
  var str2 = ``;
  Object.values(objInfo()).forEach((item, i) => {
    if (i <= 1) {
      str1 += `<th class="solid-line">
      <h4>${name[i]}</h4>
      <h2>${item} kB</h2>
      </th>`;
    } else {
      str2 += `<th >
      <h4>${name[i]}</h4>
      <h2>${item} kB</h2>
      </th>`;
    }
  });
  swap1.innerHTML = str1;
  swap2.innerHTML = str2;
}

var set = setInterval(() => {
  createElement();
}, 500);
