<template>
  <div>
    <highcharts :options="chartOptions" :callback="myCallback"></highcharts>
  </div>
</template>

<script>
import Vue from 'vue'
import Highcharts from 'highcharts'
Vue.use(Highcharts)
export default {
  name: "HighChartsBarChart",
  data() {
    return {
      chartOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: "sales & finances"
        },
        yAxis: {
          title: {
            text: "就业人数"
          }
        },
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle"
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 2010
          }
        },
        series: [
          {
            name: "",
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          },
          {
            name: "",
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
          },
          {
            name: "",
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
          },
          {
            name: "",
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
          },
          {
            name: "",
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
          }
        ],
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom"
                }
              }
            }
          ]
        }
      }
    };
  },
  mounted() {},
  methods: {
    myCallback() {
      console.log("this is callback function");
    }
  }
};
</script>

<style>
.highcharts-container {
  width: 600px;
  height: 400px;
  border: 1px solid #ddd;
  margin: auto;
}
</style>

