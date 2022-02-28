<template>
  <div>
       <highcharts class="chart" :options="chartOptions"></highcharts>
  </div>
</template>

<script>

export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: "column",
        },
        series: [
          {
            data: [1, 2, 3],
          },
        ],
      },
    };
  },
};
</script>
