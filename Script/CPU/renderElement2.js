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
    str = `<tr class="cpu1 tr_${index}"><th class="none_border"><div class="cpu_txt cpu_${index}">CPU${index}</div></th>`;
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
      str += "<tbody>";
    }
  });

  cpu1.innerHTML = str2;
  cpu2.innerHTML = str3;
}

// function drawChart(index, color) {
//   const ctx = document.getElementById(`myChart${index}`);
//   var xValues = [];
//   for (var i = 1; i <= 60; i++) {
//     xValues.push(i);
//   }
//   const lineChart = new Chart(ctx, {
//     type: "line",
//     data: {
//       labels: xValues,
//       datasets: [
//         {
//           fill: true,
//           lineTension: 0.0,
//           borderColor: "rgb(95, 141, 78);",
//           data: [],
//           borderWidth: 3,
//           pointRadius: 0,
//         },
//       ],
//     },
//     options: {
//       legend: { display: false },
//       scales: {
//         yAxes: [{ ticks: { min: 0, max: 100 } }],
//         xAxes: [{ ticks: { min: 0, max: 60 } }],
//       },
//       title: {
//         display: true,
//         text: `CPU${index}`,
//         fontSize: 16,
//       },
//     },
//   });
//   function updateChart(obj) {
//     var yData =
//       parseFloat(Object.values(obj)[0].replaceAll(",", ".")) +
//       parseFloat(Object.values(obj)[1].replaceAll(",", "."));
//     if (lineChart.data.datasets[0].data.length < 60) {
//       lineChart.data.datasets[0].data.push(yData);
//     } else {
//       lineChart.data.datasets[0].data.pop();
//       lineChart.data.datasets[0].data.unshift(yData);
//     }
//     lineChart.update();
//   }
//   setInterval(() => {
//     var obj = objInfo();
//     updateChart(obj[index]);
//   }, 1000);
// }

//model_name.innerHTML = modelName();
// setInterval(() => {
//   var obj = objInfo();
//   createElement(obj);
// }, 1000);
// for (var i = 0; i < 8; i++) {
//   drawChart(i, "rgb(184, 118, 79)");
// }

// var obj = objInfo();
// createElement(obj);
// updateChart(obj);
// var set = setInterval(() => {
//   var obj = objInfo();
//   createElement(obj);
//   updateChart(obj);
// }, 1000);

// const ctx = new Array(8);
// ctx.forEach((item, index) => {
//   item = document.getElementById(`myChart${index}`);
// });

// var xValues = [];
// for (var i = 1; i <= 60; i++) {
//   xValues.push(i);
// }

// const lineChart = new Array(8);
// lineChart.forEach((item, index) => {
//   item = new Chart(ctx[index], {
//     type: "line",
//     data: {
//       labels: xValues,
//       datasets: [
//         {
//           fill: false,
//           lineTension: 0.0,
//           backgroundColor: "rgba(0,255,0,0.1)",
//           borderColor: "rgb(95, 141, 78);",
//           data: [],
//           borderWidth: 1.5,
//           pointRadius: 0,
//         },
//         // {
//         //   fill: false,
//         //   lineTension: 0.0,
//         //   backgroundColor: "rgba(0,0,255,0.1)",
//         //   borderColor: "rgb(184, 118, 79)",
//         //   data: [],
//         //   borderWidth: 1.5,
//         //   pointRadius: 0,
//         // },
//         // {
//         //   fill: false,
//         //   lineTension: 0.0,
//         //   backgroundColor: "rgba(0,0,255,0.1)",
//         //   borderColor: "rgb(206, 119, 119)",
//         //   data: [],
//         //   borderWidth: 1.5,
//         //   pointRadius: 0,
//         // },
//         // {
//         //   fill: false,
//         //   lineTension: 0.0,
//         //   backgroundColor: "rgba(0,0,255,0.1)",
//         //   borderColor: "rgb(79, 184, 175)",
//         //   data: [],
//         //   borderWidth: 1.5,
//         //   pointRadius: 0,
//         // },
//         // {
//         //   fill: false,
//         //   lineTension: 0.0,
//         //   backgroundColor: "rgba(0,0,255,0.1)",
//         //   borderColor: "rgb(115, 169, 173)",
//         //   data: [],
//         //   borderWidth: 1.5,
//         //   pointRadius: 0,
//         // },
//         // {
//         //   fill: false,
//         //   lineTension: 0.0,
//         //   backgroundColor: "rgba(0,0,255,0.1)",
//         //   borderColor: "rgb(184, 79, 170)",
//         //   data: [],
//         //   borderWidth: 1.5,
//         //   pointRadius: 0,
//         // },
//         // {
//         //   fill: false,
//         //   lineTension: 0.0,
//         //   backgroundColor: "rgba(0,0,255,0.1)",
//         //   borderColor: "rgb(186, 148, 209)",
//         //   data: [],
//         //   borderWidth: 1.5,
//         //   pointRadius: 0,
//         // },
//         // {
//         //   fill: false,
//         //   lineTension: 0.0,
//         //   backgroundColor: "rgba(0,0,255,0.1)",
//         //   borderColor: "rgb(118, 184, 79)",
//         //   data: [],
//         //   borderWidth: 1.5,
//         //   pointRadius: 0,
//         // },
//       ],
//     },
//     options: {
//       legend: { display: false },
//       scales: {
//         yAxes: [{ ticks: { min: 0, max: 100 } }],
//         xAxes: [{ ticks: { min: 0, max: 60 } }],
//       },
//     },
//   });
// });

// function updateChart(obj) {
//   var yData = new Array(8);
//   obj.forEach((item, index) => {
//     yData[index] =
//       parseFloat(Object.values(item)[0].replaceAll(",", ".")) +
//       parseFloat(Object.values(item)[1].replaceAll(",", "."));
//   });

//   if (lineChart[0].data.datasets.data.length < 60) {
//     obj.forEach((item, index) => {
//       lineChart[index].data.datasets.data.push(yData[index]);
//     });
//   } else {
//     obj.forEach((item, index) => {
//       lineChart[index].data.datasets.data.pop();
//       lineChart[index].data.datasets.data.unshift(yData[index]);
//     });
//   }
//   for (var i = 0; i < lineChart.length; i++) {
//     lineChart[i].update();
//   }
// }

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
        borderColor: "rgb(95, 141, 78);",
        data: [],
        borderWidth: 1.5,
        pointRadius: 0,
      },
      {
        fill: false,
        lineTension: 0.0,
        backgroundColor: "rgba(0,0,255,0.1)",
        borderColor: "rgb(184, 118, 79)",
        data: [],
        borderWidth: 1.5,
        pointRadius: 0,
      },
      {
        fill: false,
        lineTension: 0.0,
        backgroundColor: "rgba(0,0,255,0.1)",
        borderColor: "rgb(206, 119, 119)",
        data: [],
        borderWidth: 1.5,
        pointRadius: 0,
      },
      {
        fill: false,
        lineTension: 0.0,
        backgroundColor: "rgba(0,0,255,0.1)",
        borderColor: "rgb(79, 184, 175)",
        data: [],
        borderWidth: 1.5,
        pointRadius: 0,
      },
      {
        fill: false,
        lineTension: 0.0,
        backgroundColor: "rgba(0,0,255,0.1)",
        borderColor: "rgb(115, 169, 173)",
        data: [],
        borderWidth: 1.5,
        pointRadius: 0,
      },
      {
        fill: false,
        lineTension: 0.0,
        backgroundColor: "rgba(0,0,255,0.1)",
        borderColor: "rgb(184, 79, 170)",
        data: [],
        borderWidth: 1.5,
        pointRadius: 0,
      },
      {
        fill: false,
        lineTension: 0.0,
        backgroundColor: "rgba(0,0,255,0.1)",
        borderColor: "rgb(186, 148, 209)",
        data: [],
        borderWidth: 1.5,
        pointRadius: 0,
      },
      {
        fill: false,
        lineTension: 0.0,
        backgroundColor: "rgba(0,0,255,0.1)",
        borderColor: "rgb(118, 184, 79)",
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
var obj = objInfo();
createElement(obj);
updateChart(obj);
model_name.innerHTML = modelName();
var set = setInterval(() => {
  var obj = objInfo();
  createElement(obj);
  updateChart(obj);
}, 1000);
