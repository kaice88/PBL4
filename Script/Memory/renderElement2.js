import { objInfo } from "./handleDataMem2.js";
const mem1 = document.querySelector(" .mem .mem1");
const mem2 = document.querySelector(" .mem .mem2");

const name = ["Total", "Free", "Used", "Buff/cache"];
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
  mem1.innerHTML = str1;
  mem2.innerHTML = str2;
}

var set = setInterval(() => {
  createElement();
}, 500);
