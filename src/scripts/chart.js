import Chart from 'chart.js';

let ctx = document.getElementById('myChart');
let myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['sleep', 'commute', 'work', 'personal time'],
    datasets: [{
      label: '# of hours',
      data: [7, 2, 8, 10],
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

