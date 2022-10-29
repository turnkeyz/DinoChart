<template>
  <div id="app">
    <div class="container">
      <div class="text-center">
        <h2 class="text-center mt-5">Dynamic Fuel and Production Charts</h2>
        <p> Trending data for the production cycles of Fossil Fuels!
        </p>
      <DinoChart />
      </div>
    </div>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
