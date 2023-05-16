<template>
    <button class="banner-button-shop" 
    @click="gotoShopPage" >Shop Now</button>
</template>
<script>
import { useRouter } from 'vue-router'

export default {
props: ['top', 'left'],
setup(props) {
    const router = useRouter()

    // setup() receives props as the first argument.
    console.log(2,props.top)
    function gotoShopPage() {
    router.push('ShopPage')
}
return {
    gotoShopPage
}
  }
}
</script>

<style>
.banner-button-shop{
    color: #000;
    width: 130px;
    background: #fff;
    padding:10px;
    position: absolute;
    top:v-bind("top");
    margin-left:50px;
    border: none;
    cursor: pointer;
    left: v-bind("left");
}
</style>