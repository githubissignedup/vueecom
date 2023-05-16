<template>
    <section class="shopping-boxes">
        <div>
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/women-fashion-free-img.jpg" alt=""/>
            <h1 class="first-h1">20% Off On Tank Tops</h1>
            <shopping-heading text="Lorem ipsum dolor sit amet,
             consectetur adipiscing elit. Proin ac dictum." 
            left="100px"
            />
            <ShopwNowButton top="1050px" left="50px"/>
        </div>
        <div>
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/men-fashion-free-img.jpg" alt=""/>
            <h1 class="second-h1">Latest Eyewear For You</h1>
            <shopping-heading 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum." 
            left="520px"
            />            <ShopwNowButton top="1050px" left="470px"/>
            </div>
        <div >
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg" alt=""/>
            <h1 class="third-h1">Let's Lorem Suit Up!</h1>
            <shopping-heading text="Lorem ipsum dolor
             sit amet, consectetur adipiscing elit. Proin ac dictum." 
            left="950px"
            />            
            <ShopwNowButton top="1050px" left="900px"/>
        </div>
    </section>
</template>

<script>
import ShopwNowButton from "./BTNShop.vue"
import ShopHeading from "./Shop-H5.vue"

export default {
    components: {
    ShopwNowButton,
    'shopping-heading':ShopHeading
  },
 
}
</script>

<style >

.first-h1{
    width:300px;
    left:100px;
}
.second-h1{
    width:300px;
    left:520px;
}
.third-h1{
    width:300px;
    left:950px;
}
.shopping-boxes{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap:40px;
    padding-left:70px;
    padding-right: 70px;
}
.shopping-boxes img{
    
    object-fit: contain;
    filter: brightness(50%);
    width: 100%;
}

.shopping-boxes h1{
    position: absolute;
    top: 1000px;
    color: #fff;
}
.shopping-boxes h5{
    position: absolute;
    top: 1150px;
    color: #fff;
}
</style>