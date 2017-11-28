Vue.component('line-chart', {
  extends: VueChartJs.Line,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
      datasets: [
        {
          label: 'GitHub Commits',
          borderColor: 'red',
          backgroundColor: 'black',
          data: [4, 3, 2, 5, 1, 1, 6, 2, 4, 4, 3, 7]
        }
      ]
    };

    var options = this.options || {
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 10
            }
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})
