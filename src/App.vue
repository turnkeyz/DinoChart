<template>
  <div id="app">
    <div class="container">
      <div class="text-center">
        <h2 class="text-center mt-5">Dynamic Fuel and Production Charts</h2>
        <p> Trending data for the production cycles of Fossil Fuels!
        </p>
        <button @click="openFile" class="btn btn-primary">Open File</button>
        <br>
        {{this.filePath}}
        <br>
      <DinoChart :dataset="this.content"/>
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
  },
  data() {
    return {
      filePath: null,
      content: null
    }
  },
  methods: {
    openFile: async function () {
      
      window.electron.openDialog();
      this.filePath = await window.electron.on('on-file-select');

      this.content = await window.electron.openCSV(this.filePath);


    }
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
