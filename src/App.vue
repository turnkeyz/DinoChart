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
        <textarea v-model="this.content" name="content" id="content" cols="100" rows="30">
        </textarea>
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

      let data = await window.electron.openCSV(this.filePath);
      console.log(data);

      this.content = JSON.stringify(data);
    }
  }
}
</script>
