<template>
    <div>
      <canvas id="OilData"></canvas>
      <select v-model="this.filters.year" @change="changeData">
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
      <select v-model="this.filters.state" @change="changeData">
        <option value="AK - Alaska">AK - Alaska</option>
        <option value="AL - Alabama">AL - Alabama</option>
        <option value="AR - Arkansas">AR - Arkansas</option>
        <option value="TX - Texas">TX - Texas</option>
      </select>
      {{this.filters}}
    </div>
  </template>
  
  <script>
  import chartOneData from '../OilData.js';
  import Chart from 'chart.js/auto';

  export default {
    name: 'OilData',
    data(){
        return{
            chartOneData:chartOneData,
            filters: {
              year: null,
              state: null
            },
            graph: null
        }
    },
    methods:{
        changeData: function(){
            chartOneData.options.parsing.yAxisKey = `monthly.${this.filters.year}.${this.filters.state}`;
            this.graph.update();
        },
        getDate: function(){
          var date = ["5/31/2020", "6/1/2021", "6/2/2022"];
          const result = [...new Set(date.map((s) => s.split("/")[2]))].sort();
          console.log(result)
        }
    },
    mounted(){
        const ctx = document.getElementById('OilData');
        //window.Electron.Chart(ctx, this.chartOneData)
        this.graph = new Chart(ctx,this.chartOneData)
        this.getDate()
    }
  }
  
</script>
