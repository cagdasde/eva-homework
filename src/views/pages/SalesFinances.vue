<!-- =========================================================================================
  File Name: Profile.vue
  Description: Profile Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
   <div><chartjs-component-bar-chart />ddddd</div>
        
</template>

<script>
import ChartjsComponentBarChart from '../charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue'

export default {
  components: { ChartjsComponentBarChart },
  
      created () {

    this.$store.dispatch('sales-finances/fetchSalesFinancesItems')
    console.log(  this.$store.dispatch('sales-finances/fetchSalesFinancesItems'))
  }}

   
  

</script>


<style lang="scss">
</style>
