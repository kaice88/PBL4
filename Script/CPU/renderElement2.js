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
function createElement(obj) {
  var str1 = ``;
  var str2 = ``;
  Object.values(obj).forEach((item, i) => {
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
        backgroundColor: "rgba(0,0,255,0.1)",
        borderColor: "rgba(0,0,255,0.8)",
        data: [],
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 0, max: 100 } }],
      xAxes: [{ ticks: { min: 0, max: 60 } }],
    },
  },
});

function updateChart(obj) {
  var yData =
    parseFloat(Object.values(obj)[0].replaceAll(",", ".")) +
    parseFloat(Object.values(obj)[1].replaceAll(",", "."));
  if (lineChart.data.datasets[0].data.length < 60) {
    lineChart.data.datasets[0].data.push(yData);
  } else {
    lineChart.data.datasets[0].data.pop();
    lineChart.data.datasets[0].data.unshift(yData);
  }
  lineChart.update();
}
var set = setInterval(() => {
  var obj = objInfo();
  createElement(obj);
  updateChart(obj);
}, 1000);
