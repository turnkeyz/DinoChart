<template>
<main>
    <div id="test">
        <p>stuff goes here</p>
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