<!-- =========================================================================================
  File Name: SalesFinances.vue
  Description: SalesFinances Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
   <div><high-charts-bar-chart></high-charts-bar-chart></div>
        
</template>

<script>
import ChartjsComponentBarChart from '../charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue'
import HighChartsBarChart from '../charts-and-maps/charts/high-charts/HighChartsBarChart.vue'

export default {
  components: { ChartjsComponentBarChart, HighChartsBarChart },
  
      created () {

    this.$store.dispatch('sales-finances/fetchSalesFinancesItems')
  }}

   
  

</script>


<style lang="scss">
</style>
