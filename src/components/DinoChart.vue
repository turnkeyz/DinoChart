<template>
    <div>
      <canvas id="chart"></canvas>
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
      {{this.changeData()}}
    </div>
  </template>
  
  <script>
  import chartOneData from '../OilData.js';
  import Chart from 'chart.js/auto';
  import {groupBy} from '../assets/dataset-utils'
  //import {formatDate} from '../assets/dataset-utils'

  export default {
    name: 'OilData',
    props: {
      dataset: Array
    },
    watch: { 
      dataset: function(newVal, oldVal) { // watch it
        console.log('Prop changed: ', newVal, ' | was: ', oldVal)

        this.graph.data.datasets = groupBy(this.dataset, 'State');

        this.graph.destroy();

        const ctx = document.getElementById("chart");
      
        this.graph = new Chart(ctx, this.chartOneData);

      }
    },
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
          return true
        }
    },
    mounted(){
      const ctx = document.getElementById("chart");
      
      this.graph = new Chart(ctx, this.chartOneData);
    }
  }
  
</script>
