<template>
    <TheHeader/>
  <TheBanner/>
 <FeaturedProducts/>
  </template>

  <script>
  import TheBanner from '../components/TheBanner.vue';
  import FeaturedProducts from '../components/FeaturedProducts.vue';
  import TheHeader from '../components/TheHeader.vue'

export default {
  name: 'HomeVue',
  components: {
       TheBanner,
       TheHeader,
    FeaturedProducts,
  },
}
</script>