// 双向柱状图
const horizontalChart = echarts.init(
  document.getElementById('horizontalChart')
);
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
const horizontalChartOption = {
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
horizontalChart.setOption(horizontalChartOption);

// 井字型散点图
const scatterChart = echarts.init(document.getElementById('scatterChart'));
const ranks = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const markPointData = [
  {
    coord: ['3', '15'],
    value: 0,
    tooltip: {
      show: false
    }
  },
  {
    coord: ['9', '15'],
    value: 1,
    tooltip: {
      show: false
    }
  },
  {
    coord: ['15', '15'],
    value: 2,
    tooltip: {
      show: false
    }
  },
  {
    coord: ['3', '9'],
    value: 3,
    tooltip: {
      show: false
    }
  },
  {
    coord: ['9', '9'],
    value: 4,
    tooltip: {
      show: false
    }
  },
  {
    coord: ['15', '9'],
    value: 5,
    tooltip: {
      show: false
    }
  },
  {
    coord: ['3', '3'],
    value: 6,
    tooltip: {
      show: false
    }
  },
  {
    coord: ['9', '3'],
    value: 7,
    tooltip: {
      show: false
    }
  },
  {
    coord: ['15', '3'],
    value: 8,
    tooltip: {
      show: false
    }
  }
];
const scatterOption = {
  title: {
    text: '井字型散点图'
  },
  tooltip: {},
  grid: [
    { height: '75%' }, // 用于显示等级 markpoint
    { height: '25%' }, // A B C 层
    { y: '35%', height: '25%' }, // D E F 层
    { y: '60%', height: '25%' }, // G H I 层
    { height: '75%'}, // 真正的数据点层
    { height: '75%' } // 坐标层
  ],
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['0', '3', '6', '9', '12', '15', '18'],
      show: false
    },
    {
      type: 'category',
      boundaryGap: false,
      data: ['0', '6', '12', '18'],
      gridIndex: 1,
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['#3fb1e3', '#fff', '#3fb1e3']
        }
      }
    },
    {
      type: 'category',
      boundaryGap: false,
      data: ['0', '6', '12', '18'],
      gridIndex: 2,
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['#fff', '#a0a7e6', '#fff']
        }
      }
    },
    {
      type: 'category',
      boundaryGap: false,
      data: ['0', '6', '12', '18'],
      gridIndex: 3,
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['#6be6c1', '#fff', '#6be6c1']
        }
      }
    },
    {
      type: 'value',
      boundaryGap: false,
      gridIndex: 4,
      min: 0,
      max: 18,
      show: false
    },
    {
      type: 'category',
      boundaryGap: false,
      data: ['0', '6', '12', '18'],
      gridIndex: 5
    }
  ],
  yAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['0', '3', '6', '9', '12', '15', '18'],
      show: false
    },
    {
      type: 'category',
      boundaryGap: false,
      data: ['12', '18'],
      gridIndex: 1,
      show: false
    },
    {
      type: 'category',
      boundaryGap: false,
      data: ['6', '12'],
      gridIndex: 2,
      show: false
    },
    {
      type: 'category',
      boundaryGap: false,
      data: ['0', '6'],
      gridIndex: 3,
      show: false
    },
    {
      type: 'value',
      boundaryGap: false,
      gridIndex: 4,
      min: 0,
      max: 18,
      show: false
    },
    {
      type: 'category',
      boundaryGap: false,
      data: ['0', '6', '12', '18'],
      gridIndex: 5
    }
  ],
  series: [
    {
      type: 'scatter',
      markPoint: {
        symbol: 'circle',
        silent: true,
        itemStyle: {
          normal: {
            color: 'rgba(255, 255, 255, 0)'
          }
        },
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#ddd',
              fontSize: 16
            },
            formatter: function(param) {
              return ranks[param.value];
            }
          }
        },
        data: markPointData
      }
    },
    {
      type: 'scatter',
      gridIndex: 1,
    },
    {
      type: 'scatter',
      gridIndex: 2,
    },
    {
      type: 'scatter',
      gridIndex: 3,
    },
    {
      type: 'scatter',
      xAxisIndex: 4,
      yAxisIndex: 4,
      itemStyle: {
        normal: {
          borderColor: '#838b8d',
          borderWidth: 2,
        },
        emphasis: {
          borderColor: '#eaf4f7',
          borderWidth: 2,
        }
      },
      data: [
        [1, 2],
        [3, 5],
        [5.5, 10.8],
        [2, 7],
        [5, 14],
        [8, 5],
        [8.9, 8.9],
        [11, 10.9],
        [9.8, 15.5],
        [13,9, 13.9],
        [14, 15.6],
        [16.8, 4.9]
      ]
    }
  ]
};
scatterChart.setOption(scatterOption);

window.onresize = function() {
  horizontalChart.resize();
  scatterChart.resize();
}