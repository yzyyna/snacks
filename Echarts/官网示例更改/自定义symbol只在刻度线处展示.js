let base = +new Date(1988, 9, 3);
let oneDay = 24 * 3600 * 1000;
let data = [{value:[base, Math.random() * 300]}];
for (let i = 1; i < 20000; i++) {
  let now = new Date((base += oneDay));
  data.push({value:[+now,Math.round((Math.random() - 0.5) * 20 + data[i - 1].value[1])],
  symbol:'pin',
  showSymbol:data[i-1].value[1]>50,
  symbolSize:15,
  itemStyle:{
    color:'red',
    opacity:data[i-1].value[1]>50?0:1
  }
  });
}
console.log(data)
option = {
  tooltip: {
    trigger: 'axis',
    position: function (pt) {
      return [pt[0], '10%'];
    }
  },
  title: {
    left: 'center',
    text: 'Large Ara Chart'
  },
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'time',
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%']
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 20
    },
    {
      start: 0,
      end: 20
    }
  ],
  series: [
    {
      name: 'Fake Data',
      type: 'line',
      smooth: true,
      symbol: 'none',
      // showSymbol:false,
      areaStyle: {},
      data: data
    }
  ]
};
