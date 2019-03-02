(function() {
  const chart = echarts.init(document.getElementById('mapChart'));
  const mapJSON = {
    anshan: 'map/anshan.json',
    benxi: 'map/benxi.json',
    chaoyang: 'map/chaoyang.json',
    dalian: 'map/dalian.json',
    dandong: 'map/dandong.json',
    fushun: 'map/fushun.json',
    fuxin: 'map/fuxin.json',
    huludao: 'map/huludao.json',
    jinzhou: 'map/jinzhou.json',
    liaoyang: 'map/liaoyang.json',
    panjin: 'map/panjin.json',
    shenyang: 'map/shenyang.json',
    tieling: 'map/tieling.json',
    yingkou: 'map/yingkou.json'
  };
  const cityToPinyin = {
    鞍山市: 'anshan',
    本溪市: 'benxi',
    朝阳市: 'chaoyang',
    大连市: 'dalian',
    丹东市: 'dandong',
    抚顺市: 'fushun',
    阜新市: 'fuxin',
    葫芦岛市: 'huludao',
    锦州市: 'jinzhou',
    辽阳市: 'liaoyang',
    盘锦市: 'panjin',
    沈阳市: 'shenyang',
    铁岭市: 'tieling',
    营口市: 'yingkou'
  };
  const mapData = [
    {
      name: '鞍山市',
      num: 0
    },
    {
      name: '本溪市',
      num: 0
    },
    {
      name: '朝阳市',
      num: 0
    },
    {
      name: '大连市',
      num: 0
    },
    {
      name: '丹东市',
      num: 0
    },
    {
      name: '抚顺市',
      num: 0
    },
    {
      name: '阜新市',
      num: 0
    },
    {
      name: '葫芦岛市',
      num: 0
    },
    {
      name: '锦州市',
      num: 0
    },
    {
      name: '辽阳市',
      num: 0
    },
    {
      name: '盘锦市',
      num: 0
    },
    {
      name: '沈阳市',
      num: 0
    },
    {
      name: '铁岭市',
      num: 0
    },
    {
      name: '营口市',
      num: 0
    }
  ];

  function createMap(data) {
    fetch('map/liaoning.json')
      .then(response => response.json())
      .then(response => {
        echarts.registerMap('liaoning', response);
        const option = {
          back: false,
          title: {
            text: '地图下钻'
          },
          series: [
            {
              type: 'map',
              map: 'liaoning',
              data: data,
              label: {
                normal: {
                  show: true
                }
              }
            }
          ]
        };
        chart.clear();
        chart.setOption(option);
      });
  }

  createMap(mapData);

  chart.on('click', function(params) {
    if (this.getOption().back) {
      createMap(mapData);
      return;
    }

    const city = params.name;
    fetch(mapJSON[cityToPinyin[city]])
      .then(response => response.json())
      .then(response => {
        echarts.registerMap(cityToPinyin[city], response);
        const option = {
          back: true,
          series: [
            {
              type: 'map',
              map: cityToPinyin[city],
              data: mapData.filter(item => item.name === city),
              label: {
                normal: {
                  show: true,
                  formatter: function(param) {
                    return '{h|' + param.name +
                      '}\n{p|数量：' + param.data.num +
                      '}';
                  },
                  rich: {
                    h: {
                      fontSize: 28,
                      padding: [20, 0],
                      align: 'left'
                    },
                    p: {
                      fontSize: 22,
                      padding: [0, 0, 10, 0],
                      align: 'left'
                    }
                  }
                }
              }
            }
          ]
        };

        if (city === '葫芦岛市') {
          option.series[0].roam = 'scale';
          option.series[0].layoutCenter = ['70%', '60%'];
          option.series[0].layoutSize = 15;
        }

        if (city === '大连市') {
          option.series[0].roam = 'scale';
          option.series[0].layoutCenter = ['70%', '60%'];
          option.series[0].layoutSize = 0.5;
        }

        if (city === '丹东市') {
          option.series[0].layoutCenter = ['40%', '50%'];
          option.series[0].layoutSize = 8;
        }
        chart.clear();
        chart.setOption(option);
      })
  });
}());