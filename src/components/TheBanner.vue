<template>
    <section class="banner-section">
        <div class="overlay">
        <div class="banner-container">
            <img src="../../public/images/hero.jpg" alt="">
        <div class="banner-text">
            <h1>Raining Offers For Hot Summer!</h1>
<h3 class="elementor-heading-title elementor-size-default">
    25% Off On All Products</h3> 
<ShopwNowButton/>
<button class="banner-button-shop"
@click="gotoShopPage"
>Shop Now</button>

    <button class="banner-button-find">Find More</button>

</div>
</div>
</div>
    </section>
    <section class="logo-section">
        <carousel :autoplay="2000" :items-to-show="1" :wrapAround="true" :transition="2300">
    <slide v-for="i in images" :key="i.id">
        <img v-for="i in images" :key="i.id" :src="i.image">

    </slide>

    <template #addons>
      <navigation />
      
    </template>
  </carousel>
      </section>
    
        <TheShoppingBox />
</template>

<script>
import {ref } from 'vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import TheShoppingBox from "./UI/ShoppingBox.vue"
import ShopwNowButton from "./UI/BTNShop.vue"
import { useRouter } from 'vue-router'
export default {
    components: {
    Carousel,
    Slide,
    Navigation,
    TheShoppingBox,
    ShopwNowButton,
  },
setup() {
const images=ref([
    {id:1, image: '/images/scroller/logo1.png'},
    {id:1, image: '/images/scroller/logo2.png'},
    {id:1, image: '/images/scroller/logo3.png'},
    {id:1, image: '/images/scroller/logo4.png'},
    {id:1, image: '/images/scroller/logo5.png'},
])
const router = useRouter()

function gotoShopPage() {
    this.router.push('ShopPage')
}

return {
    images,
    gotoShopPage,
    router
}
}
}
</script>

<style scoped>
.banner-section{
    background: #0084d6;

}
.banner-button-shop{
    color: #000;
    width: 130px;
    background: #fff;
    padding:10px;
    position: absolute;
    top:460px;
    margin-left:50px;
    border: none;
    cursor: pointer;
}

.logo-section img{
    width:15%;
    padding: 40px;

}
.logo-section .left{
    width:1%;
    cursor: pointer;
}
.logo-section .right{
    width:1%;
    cursor: pointer;
}
img{
    background-color: transparent;
    background-repeat: no-repeat;
    width: 100%;
}

.banner-text h1{
    width:50%;
    position: absolute;
    top:200px;
    line-height: 1.2em;
    color: #fff;
    font-size:70px;
    margin-left:50px;
}
.banner-text h3{
    width:50%;
    position: absolute;
    top:370px;
    line-height: 1.2em;
    color: #fff;
    font-size:20px;
    margin-left:50px;
}
.banner-text span{
    width:50%;
    position: absolute;
    top:500px;
    line-height: 1.2em;
    color: #fff;
    font-size:20px;
    margin-left:50px;
}


.banner-button-find{
    color: #fff;
    text-transform: uppercase;
    width: 130px;
    background: transparent;
    border: 1px solid #fff;
    padding:10px;
    position: absolute;
    top:460px;
    left:180px;
    margin-left:50px;
    cursor: pointer;
}
</style>