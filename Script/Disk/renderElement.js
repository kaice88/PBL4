import { arrInfo } from "./handleDataDisk.js";
const contain = document.querySelector(" .disk-structure");
function createElement() {
  const str = [
    "Filesystem",
    "1K-bLocks",
    "Used",
    "Available",
    "Uses",
    "Mounted-on",
  ];

  str.forEach((item, index) => {
    str[index] = `<div class="flex-${item}">
    <ul class="${item}"><h6>${item}</h6>`;
  });

  arrInfo().forEach((item) => {
    item.forEach((i, index) => {
      str[index] += `<li>${i.toString().trim()}</li>`;
    });
  });
  str.forEach((item, index) => {
    str[index] = item + `</ul></div>`;
  });
  contain.innerHTML = str.join("");
}
createElement();
