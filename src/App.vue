<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  background: #000 url(@/images/forside.svg);
 background-size: cover;
 background-position: center;
 justify-content: center;
 align-items: center;

}
</style>
