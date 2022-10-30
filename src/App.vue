<template>
  <div id="app" class="text-center mt-5">
    <h2>Dynamic Fuel and Production Charts</h2>
        <p> Trending data for the production cycles of Fossil Fuels!</p>
    <DinoChart/>
  </div>
</template>

<script>
import DinoChart from './components/DinoChart.vue'
 
export default {
  name: 'App',
  components: {
    DinoChart
  }
}
</script>
