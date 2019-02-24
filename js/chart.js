// 双向柱状图
const horizontalChart = echarts.init(document.getElementById('horizontalChart'));
const dealers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const preSaleValues = [
  3000000, 1000000, 3600000, 2000000, 1500000, 3000000, 4000000, 1000000
];
const afterSaleValues = [
  3000000, 2000000, 2600000, 3000000, 2000000, 1000000, 1200000, 2000000
];
const preSaleData = preSaleValues.map(value => ({
  value: value,
  label: {
    normal: {
      show: true
    }
  }
}));
const afterSaleData = afterSaleValues.map(value => ({
  value: value,
  label: {
    normal: {
      show: true
    }
  }
}));
const maxPreSale = Math.max(...preSaleValues);
const maxAfterSale = Math.max(...afterSaleValues);
let max = maxPreSale;
if (maxAfterSale > maxPreSale) {
  max = maxAfterSale;
}
max += 10 ** (String(max).length - 1);
const bgData = Array(preSaleData.length).fill(max);
let rates = [];
for (let i = 0; i < preSaleValues.length; i++) {
  rates.push((preSaleValues[i] / afterSaleValues[i]).toFixed(2) * 100);
}
rates = rates.map(rate => ({
  value: rate,
  label: {
    normal: {
      show: true,
      formatter: rate + '%'
    }
  },
  tooltip: {
    formatter: '{a}<br>{b}: {c}%'
  }
}));
const option = {
  title: {
    text: '双向柱状图'
  },
  tooltip: {},
  legend: {
    data: ['售前', '售后', '售前售后之比']
  },
  grid: [
    {},
    {
      left: '15%',
      width: '25%'
    },
    {
      left: '40%%',
      width: '25%'
    },
    {
      left: '75%'
    }
  ],
  xAxis: [
    {
      show: false,
    },
    {
      type: 'value',
      inverse: true,
      show: false,
      gridIndex: 1
    },
    {
      type: 'value',
      gridIndex: 2,
      show: false
    },
    {
      type: 'value',
      gridIndex: 3,
      show: false
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: dealers,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      inverse: true
    },
    {
      type: 'category',
      data: dealers,
      position: 'right',
      show: false,
      inverse: true,
      gridIndex: 1
    },
    {
      type: 'category',
      data: dealers,
      gridIndex: 2,
      show: false,
      inverse: true
    },
    {
      type: 'category',
      data: dealers,
      gridIndex: 3,
      inverse: true,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    }
  ],
  series: [
    {
      type: 'bar',
      name: '售前',
      data: preSaleData,
      z: 10,
      xAxisIndex: 1,
      yAxisIndex: 1,
      itemStyle: {
        normal: {
          barBorderRadius: [25, 0, 0, 25]
        }
      },
      barWidth: 40,
      barGap: 50
    },
    {
      type: 'bar',
      data: bgData,
      barGap: '-100%',
      xAxisIndex: 1,
      yAxisIndex: 1,
      itemStyle: {
        normal: {
          color: '#ddd',
          barBorderRadius: [25, 0, 0, 25]
        }
      },
      barWidth: 40,
      silent: true
    },
    {
      type: 'bar',
      name: '售后',
      data: afterSaleData,
      xAxisIndex: 2,
      yAxisIndex: 2,
      z: 10,
      itemStyle: {
        normal: {
          barBorderRadius: [0, 25, 25, 0]
        }
      },
      barWidth: 40,
      barGap: 50
    },
    {
      type: 'bar',
      data: bgData,
      xAxisIndex: 2,
      yAxisIndex: 2,
      barGap: '-100%',
      itemStyle: {
        normal: {
          color: '#ddd',
          barBorderRadius: [0, 25, 25, 0]
        }
      },
      barWidth: 40,
      silent: true
    },
    {
      type: 'bar',
      name: '售前售后之比',
      data: rates,
      xAxisIndex: 3,
      yAxisIndex: 3,
      barWidth: 40,
      barGap: 50
    }
  ]
};
horizontalChart.setOption(option);
