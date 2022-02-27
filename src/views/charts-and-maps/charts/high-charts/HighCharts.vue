<!-- =========================================================================================
    File Name: Echarts.vue
    Description: Echarts (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="extra-component-echarts-demo">
        <p class="mb-4">ECharts component for Vue.js. Read full documnetation <a href="https://github.com/ecomfe/vue-echarts" target="_blank" rel="nofollow">here</a></p>

        <div class="vx-row match-height">
            <div class="vx-col w-full">
                <high-charts-bar-chart></high-charts-bar-chart>
            </div>
  
        </div>
    </div>
</template>

<script>
import HighChartsBarChart from './HighChartsBarChart.vue'

export default {
  components: {
    HighChartsBarChart
  }
}
</script>
