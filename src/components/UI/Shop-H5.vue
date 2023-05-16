<template>
    <div class="heading-box">
        <h5>{{text}}</h5>
    </div>
</template>
<script>
export default {
props: ['left','text'],
setup() {
    // setup() receives props as the first argument.
  }
}
</script>

<style scoped>
.heading-box{
   
    
}
h5{
    width:300px;
    left: v-bind("left");
}
</style>