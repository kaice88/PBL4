import { objInfo } from "./handleDataMem2.js";
const mem1 = document.querySelector(" .mem .mem1");
const mem2 = document.querySelector(" .mem .mem2");

const name1 = ["Total", "Free", "Used", "Buff/cache"];
function createElementMem(obj) {
  var str1 = ``;
  var str2 = ``;
  Object.values(obj).forEach((item, i) => {
    if (i <= 1) {
      str1 += `<th class="solid-line">
      <h4>${name1[i]}</h4>
      <h2>${item} kB</h2>
      </th>`;
    } else {
      str2 += `<th >
      <h4>${name1[i]}</h4>
      <h2>${item} kB</h2>
      </th>`;
    }
  });
  mem1.innerHTML = str1;
  mem2.innerHTML = str2;
}

const swap1 = document.querySelector(" .swap .swap1");
const swap2 = document.querySelector(" .swap .swap2");

const name2 = ["Total", "Free", "Used", "Avail Mem"];
function createElementSwap(obj) {
  var str1 = ``;
  var str2 = ``;
  Object.values(obj).forEach((item, i) => {
    if (i <= 1) {
      str1 += `<th class="solid-line">
      <h4>${name2[i]}</h4>
      <h2>${item} kB</h2>
      </th>`;
    } else {
      str2 += `<th >
      <h4>${name2[i]}</h4>
      <h2>${item} kB</h2>
      </th>`;
    }
  });
  swap1.innerHTML = str1;
  swap2.innerHTML = str2;
}

const ctx = document.getElementById("myChart");
var xValues = [];
for (var i = 1; i <= 60; i++) {
  xValues.push(i);
}

const lineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0.3,
        backgroundColor: "rgba(0,0,0,255,0.1)",
        borderColor: "rgba(0,0,255,0.8)",
        data: [],
      },
      {
        fill: false,
        lineTension: 0.3,
        backgroundColor: "rgba(255,0,0,0.1)",
        borderColor: "rgba(255,0,0,0.8)",
        data: [],
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 0, max: 16000 } }],
      xAxes: [{ ticks: { min: 0, max: 60 } }],
    },
  },
});

function updateChart(obj1, obj2) {
  var yData1 = parseFloat(Object.values(obj1)[2].replaceAll(",", "."));
  var yData2 = parseFloat(Object.values(obj2)[2].replaceAll(",", "."));
  if (lineChart.data.datasets[0].data.length < 60) {
    lineChart.data.datasets[0].data.push(yData1);
    lineChart.data.datasets[1].data.push(yData2);
  } else {
    lineChart.data.datasets[0].data.pop();
    lineChart.data.datasets[0].data.unshift(yData1);
    lineChart.data.datasets[1].data.pop();
    lineChart.data.datasets[1].data.unshift(yData2);
  }
  lineChart.update();
}
var set = setInterval(() => {
  var obj1 = objInfo(3);
  var obj2 = objInfo(4);
  createElementMem(obj1);
  createElementSwap(obj2);
  updateChart(obj1, obj2);
}, 500);
