<template>
  <TheHeader/>

  <router-view/>
</template>

<script>
// import Home from './views/Home.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader
  },
}
</script>

<style>
*{
  margin:0;
  padding:0;
}

body{
  font-family: "Times New Roman", Times, serif;
  font-family: 'Open Sans';
  font-family: 'Poppins';
  src: url('./assets/fonts/Poppins/Poppins-Regular.ttf');
  font-style: normal;
  font-weight: 400;
  font-display: swap;
width:100%;
}

img{
  background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
