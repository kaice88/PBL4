import { objInfo } from "./handleDataDU.js";

const tbody = document.querySelector(".tbody");
var URL = `~/`;
const duCmd1 = `cd ${URL} && du -shx */ | sort -hr`;
var str = ``;
//const duCmd2 = "cd ~/ && cd Downloads && du -shx * | sort -hr";
function addSlash(str) {
  str = str
    .replaceAll(" ", "\\ ")
    .replaceAll("(", "\\(")
    .replaceAll(")", "\\)");
  return str;
}

function createElement() {
  var objData = objInfo(URL);
  var fURL = URL;
  Object.keys(objData).forEach((item) => {
    URL = fURL + addSlash(item) + "/";
    if (objInfo(URL) !== "null") {
      str += `<div class="tr sub-btn"><div class="td">
        <i class="fa-solid fa-caret-right dropdown"></i>
        ${item}</div>
        <div class="td">${objData[item]}</div></div>`;
      str += `<div class="sub-menu display">`;
      createElement();
    } else {
      str += `<div class="tr"><div class="td" id="none_i">${item}</div>
        <div class="td">${objData[item]}</div></div>`;
    }
  });
  str += `</div>`;
}
createElement();
tbody.innerHTML = str;

