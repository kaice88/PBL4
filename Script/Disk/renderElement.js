import { arrInfo } from "./handleDataDisk.js";
const table = document.querySelector(".tableDisk");
function createElement() {
  const str = ["Filesystem", "Total", "Used", "Available", "", "Mountedon"];
  var str1 = `<tr class="title_table">`;
  var str2 = ``;
  str.forEach((item, index) => {
    if (index != 4) {
      str1 += `<th>${item}</th>`;
    }
  });
  str1 += `<th>${str[4]}</th></tr>`;

  arrInfo().forEach((item, index) => {
    if (index > 0) {
      var str3 = `<tr class="normal_table">`;
      item.forEach((i, id) => {
        if (id != 4) {
          str3 += `<td>${i}</td>`;
        }
      });
      str3 += `<td class="progress_table">
      <div class="progress">
        <div class="progress__fill"></div>
        <span class="progress__text"></span>
      </div>
    </td></tr>`;
      str2 += str3;
    }
  });
  table.innerHTML = str1 + str2;
}
function updateProgressBar(progressBar, value) {
  value = Math.round(value);
  progressBar.querySelector(".progress__fill").style.width = `${value}%`;
  progressBar.querySelector(".progress__text").textContent = `${100 - value}%`;
}
createElement();
var percent = [];
for (var i = 1; i < arrInfo().length; i++) {
  var per = parseInt(
    arrInfo()
      [i][4].toString()
      .slice(0, arrInfo()[i][4].toString().length - 1),
    10
  );
  percent.push(per);
  console.log(per);
}
const myProgressBar = document.querySelectorAll(".progress");
for (var i = 0; i < myProgressBar.length; i++) {
  updateProgressBar(myProgressBar[i], percent[i]);
}
