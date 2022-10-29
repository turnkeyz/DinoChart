<template>
<main>
    <div class="container" id="chartOne">
        <div class="col mt-3">
            <p>First Chart</p>
            <div class="input-group mb-3">
            </div>
        </div>
    </div>
    <div class="container" id="chartTwo">
        <div class="col mt-3">
            <p>Second Chart</p>
            <div class="input-group mb-3">
            </div>
        </div>
    </div>
    <div class="container" id="chartThree">
        <div class="col mt-3">
            <p>Third Chart</p>
            <div class="input-group mb-3">
            </div>
        </div>
    </div>
    <div class="container" id="chartFour">
        <div class="col mt-3">
            <p>Fourth Chart</p>
            <div class="input-group mb-3">
            </div>
        </div>
    </div>
</main>
</template>
<script>
export default {
  name: "DinoChart",
  props: {
    Chart: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.chartOne{
    display: inline-block;
    width: 20px;
    height: 75px;
    background-color: teal;
    border: 1px solid black;
    padding: 50px;
}
.chartTwo{
    display: inline-block;
    width: 20px;
    height: 75px;
    background-color: teal;
    border: 1px solid black;
}
.chartThree{
    display: inline-block;
    width: 20px;
    height: 75px;
    background-color: teal;
    border: 1px solid black;
}
.chartFour{
    display: inline-block;
    width: 20px;
    height: 75px;
    background-color: teal;
    border: 1px solid black;
}
</style>