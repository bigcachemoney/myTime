import Chart from 'chart.js';
import { slideValue, inputSlider } from './slider.js';

const ctx = document.getElementById('myChart');

const myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['sleep', 'commute', 'work', 'personal time'],
    datasets: [{
      label: '# of hours',
      data: [8, 2, 8, 6],
      backgroundColor:[
        '#f1c40f',
        '#e67e22',
        '#16a085',
        '#2980b9',
      ]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

// function updateConfigByMutating(chart) {
//   chart.options.title.text = 'new title';
//   chart.update();
// }

function updateData() {
  let newData = [];

  debugger;
  newData.push(inputSlider.value);

  myChart.data.datasets[0].data = newData;
  myChart.update();
}

