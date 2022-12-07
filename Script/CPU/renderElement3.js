import { objInfo } from "./handleDataCPU2.js";

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
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
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

function updateChart() {
  var yData = parseFloat(Object.values(objInfo())[0].replaceAll(",", "."));
  if (lineChart.data.datasets[0].data.length < 60) {
    lineChart.data.datasets[0].data.push(yData);
  } else {
    lineChart.data.datasets[0].data.pop();
    lineChart.data.datasets[0].data.unshift(yData);
  }
  console.log(yData);
  lineChart.update();
}
// setInterval(() => {updateChart()},500)
var set = setInterval(() => {
  updateChart();
}, 500);
