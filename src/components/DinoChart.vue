<template>
    <div>
      <canvas id="ChartOne"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js';
  import chartOneData from '../ChartOne.js';

  export default {
    name: 'ChartOne',
    data(){
        return{
            chartOneData:chartOneData
        }
    },
    mounted(){
        const ctx = document.getElementById('ChartOne');
        new Chart(ctx, this.chartOneData)
    }
  }
  </script>