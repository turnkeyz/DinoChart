<template>
    <div>
      <canvas id="OilData"></canvas>
      <select id="year" @change="changeData">
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
      </select>
      <select id="state" @change="changeData">
        <option value="AK - Alaska">AK - Alaska</option>
        <option value="AL - Alabama">AL - Alabama</option>
        <option value="AR - Arkansas">AR - Arkansas</option>
        <option value="TX - Texas">TX - Texas</option>
      </select>
    </div>
  </template>
  
  <script>
  import chartOneData from '../OilData.js';
  import Chart from 'chart.js/auto';

  export default {
    name: 'OilData',
    data(){
        return{
            chartOneData:chartOneData
        }
    },
    methods:{
        changeData: function(){
            const year = document.getElementById('year').value;
            const state = document.getElementById('state').value;
            console.log(year);
            console.log(state);
            chartOneData.options.parsing.yAxisKey = `yearly.${year}.barrels`;
            //chartOneData.update();
        }
    },
    mounted(){
        const ctx = document.getElementById('OilData');
        //window.Electron.Chart(ctx, this.chartOneData)
        new Chart(ctx,this.chartOneData)
    }
  }
  
</script>
