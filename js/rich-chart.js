(function() {
  const chart = echarts.init(document.getElementById('richChart'));
  const language = {
    java: 'images/java.svg',
    javascript: 'images/javascript.svg',
    python: 'images/python.svg',
    ruby: 'images/ruby.svg',
    swift: 'images/swift.svg',
    typescript: 'images/typescript.svg'
  };
  const counts = [100000, 98000, 90000, 60000, 40000, 20000].reverse();
  const option = {
    title: {
      text: '富文本标签柱状图'
    },
    xAxis: {
      type: 'value',
      show: false
    },
    yAxis: {
      type: 'category',
      data: ['java', 'javascript', 'typescript', 'python', 'swift', 'ruby']
        .reverse(),
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        formatter: function(value) {
          return '{' + value + '|}';
        },
        rich: {
          java: {
            fontSize: 24,
            align: 'center',
            backgroundColor: {
              image: language['java']
            }
          },
          javascript: {
            fontSize: 24,
            align: 'center',
            backgroundColor: {
              image: language['javascript']
            }
          },
          python: {
            fontSize: 24,
            align: 'center',
            backgroundColor: {
              image: language['python']
            }
          },
          ruby: {
            fontSize: 24,
            align: 'center',
            backgroundColor: {
              image: language['ruby']
            }
          },
          swift: {
            fontSize: 24,
            align: 'center',
            backgroundColor: {
              image: language['swift']
            }
          },
          typescript: {
            fontSize: 24,
            align: 'center',
            backgroundColor: {
              image: language['typescript']
            }
          }
        }
      }
    },
    series: [
      {
        type: 'bar',
        data: [90, 80, 70, 30, 20, 10].reverse(),
        label: {
          normal: {
            show: true,
            formatter: function(params) {
              return params.value + '%';
            },
            fontSize: 20
          }
        },
        barWidth: '60%',
        z: 10
      },
      {
        type: 'bar',
        data: Array(6).fill(100),
        barGap: '-100%',
        silent: true,
        label: {
          normal: {
            position: 'right',
            show: true,
            formatter: function(params) {
              return counts[params.dataIndex];
            },
            fontSize: 24,
            color: '#f5bf4f'
          }
        },
        itemStyle: {
          normal: {
            color: '#ddd'
          }
        },
        barWidth: '60%'
      }
    ]
  };
  chart.setOption(option);

  window.onresize = function() {
    chart.resize();
  };
}());
