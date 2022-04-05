<template>
  <div>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<script setup>
const handleClick = () => {
  console.warn("handleClick");
  if (DEBUG) {
    const a = 1;
    const b = 2;
    console.warn(a + b);
  }
};
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
