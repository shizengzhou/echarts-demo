(function() {
  // 井字型散点图
  const chart = echarts.init(
    document.getElementById('ticTypeScatterChart')
  );
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
  const option = {
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
  chart.setOption(option);
}());
