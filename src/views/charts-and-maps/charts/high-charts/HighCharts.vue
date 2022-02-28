<!-- =========================================================================================
    File Name: Echarts.vue
    Description: Echarts (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
            <div class="vx-col w-full">
                <high-charts-bar-chart></high-charts-bar-chart>
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
