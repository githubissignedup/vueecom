<template>
<nav>
    <div class="left-menu">
        <img src="../../public/images/log.png" alt=""
        @click.prevent="goHomePage">
        <!-- <ul><li><a href="">Everything</a></li></ul>
        <ul><li><a href="">Women</a></li></ul>
        <ul><li><a href="">Men</a></li></ul>
        <ul><li><a href="">Accessories</a></li></ul> -->
    </div>
    <div class="right-menu">
        <ul><li><a href=""
            @click.prevent="goAboutPage"
            >About</a></li></ul>
        <ul><li><a href="">contact us</a></li></ul>
        <ul><li><a href="">$0.00</a></li></ul>
        <ul><li><a href="">
            <i class="fas fa-shopping-cart"></i>
        </a></li></ul>
        <ul><li><a href="">
            <i class="fa-solid fa-user"></i>
           <div class="quantity">
            {{ $store.state.cartItems }}
           </div>
        </a></li></ul>


    </div>

</nav>
</template>

<script>
import router from "@/router";

export default {
    methods: {
        goAboutPage() {
            router.push({ name: "about"});
        },
        goHomePage() {
            router.push( "/");
        }

    }
}
</script>

<style scoped>
nav {
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #0075be;
    font-family: "Courier Prime";
    font-size: 0.9em;
    z-index:999;
    width:100%;
}

img{
    max-width: 140px;
    cursor: pointer;
}

ul{
    margin:auto;
}
.left-menu{
    display: flex;
    flex-direction: row;
    padding: 30px;
}


ul li a{
    padding: 20px;
    text-decoration: none;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
}
li{
    list-style-type: none;
    
}

.quantity{
    position:relative;
    right:30px;
    top:-11px;
}
.right-menu{
    display: flex;
    flex-direction: row;
}
</style>