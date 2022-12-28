import { objInfo, modelName } from "./handleDataCPU2.js";
const cpu1 = document.querySelector(" .container1 .cpu1 .cpu");
const cpu2 = document.querySelector(" .container1 .cpu2 .cpu");
const model_name = document.querySelector(" .model_name-value p");

const name = [
  "User",
  "System",
  "Nice",
  "Idle",
  "IO Wait",
  "Hardware",
  "Software",
  "Steal",
];
function createElement(obj) {
  var str2 = ``;
  var str3 = ``;
  var str = `<tbody>`;
  obj.forEach((i, index) => {
    str = `<tr class="cpu1 tr_${index}"><th class="none_border"><div class="cpu_txt">CPU${index}</div></th>`;
    // str += '<p>CPU</p>';
    // str += '<tr><div class="cpu_txt">CPU ${index}</div></tr>';
    if (index % 2 == 0) {
      Object.values(i).forEach((item, index) => {
        if (index <= 3) {
          str += `<th class="solid-line cpu">
        <h4>${name[index]}</h4>
        <h2>${item}%</h2>
        </th>`;
        }
      });
      str2 += str + `</tr>`;
    } else {
      Object.values(i).forEach((item, index) => {
        if (index <= 3) {
          str += `<th class="cpu" >
          <h4>${name[index]}</h4>
          <h2>${item}%</h2>
          </th>`;
        }
      });
      str3 += str + `</tr>`;
      str += '<tbody>';
    }
  });

  cpu1.innerHTML = str2;
  cpu2.innerHTML = str3;
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
        lineTension: 0.0,
        backgroundColor: "rgba(0,255,0,0.1)",
        borderColor: "rgba(0,255,0,0.8)",
        data: [],
        borderWidth: 1.5,
        pointRadius: 0,
      },
      {
        fill: false,
        lineTension: 0.0,
        backgroundColor: "rgba(0,0,255,0.1)",
        borderColor: "rgba(0,0,255,0.8)",
        data: [],
        borderWidth: 1.5,
        pointRadius: 0,
      },
      {
        fill: false,
        lineTension: 0.0,
        backgroundColor: "rgba(0,0,255,0.1)",
        borderColor: "rgba(0,0,255,0.8)",
        data: [],
        borderWidth: 1.5,
        pointRadius: 0,
      },
      {
        fill: false,
        lineTension: 0.0,
        backgroundColor: "rgba(0,0,255,0.1)",
        borderColor: "rgba(0,0,255,0.8)",
        data: [],
        borderWidth: 1.5,
        pointRadius: 0,
      },
      {
        fill: false,
        lineTension: 0.0,
        backgroundColor: "rgba(0,0,255,0.1)",
        borderColor: "rgba(0,0,255,0.8)",
        data: [],
        borderWidth: 1.5,
        pointRadius: 0,
      },
      {
        fill: false,
        lineTension: 0.0,
        backgroundColor: "rgba(0,0,255,0.1)",
        borderColor: "rgba(0,0,255,0.8)",
        data: [],
        borderWidth: 1.5,
        pointRadius: 0,
      },
      {
        fill: false,
        lineTension: 0.0,
        backgroundColor: "rgba(0,0,255,0.1)",
        borderColor: "rgba(0,0,255,0.8)",
        data: [],
        borderWidth: 1.5,
        pointRadius: 0,
      },
      {
        fill: false,
        lineTension: 0.0,
        backgroundColor: "rgba(0,0,255,0.1)",
        borderColor: "rgba(0,0,255,0.8)",
        data: [],
        borderWidth: 1.5,
        pointRadius: 0,
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
  var yData = new Array(8);
  obj.forEach((item, index) => {
    yData[index] =
      parseFloat(Object.values(item)[0].replaceAll(",", ".")) +
      parseFloat(Object.values(item)[1].replaceAll(",", "."));
  });

  if (lineChart.data.datasets[0].data.length < 60) {
    obj.forEach((item, index) => {
      lineChart.data.datasets[index].data.push(yData[index]);
    });
  } else {
    obj.forEach((item, index) => {
      lineChart.data.datasets[index].data.pop();
      lineChart.data.datasets[index].data.unshift(yData[index]);
    });
  }
  lineChart.update();
}
model_name.innerHTML = modelName();
var set = setInterval(() => {
  var obj = objInfo();
  createElement(obj);
  updateChart(obj);
}, 1000);
