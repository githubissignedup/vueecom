<template>
    <!-- <TheHeader /> -->
    <section>

        <div class="image-zoom">
            <div 
                data-thumb-alt="" class="woocommerce-product-gallery__image" style="position: relative; overflow: hidden;">
                
                    <img
                        :src="filteredImgs[0].path"
                        class="wp-post-image" alt="" decoding="async" loading="lazy" title="sports-shoe3"
                        data-caption="">
            </div>
        </div>
        <div class="product-content">
            <div>
                <h1>{{ this.filteredImgs[0].name }}</h1>
            </div>
            <div>
                {{ this.filteredImgs[0].price }}
            </div>
            <div>
            </div>
            <div>
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat
                justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.
            </div>
            <div>

<select name="quantity" id="quantity" v-model="total">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>
                <!-- <input type="number" min="0" v-model="total"> -->
                <button @click="addToCart()">Add to Cart</button>
            </div>
        </div>
    </section>
</template>

<script>
// import TheHeader from '../components/TheHeader.vue'

export default {
    components: {
        // TheHeader,

    },
    data() {
        return {
            images: [
                { id: 1, path: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg',
                 name: 'DNK  Yellow Shoes', price: '$120.00', category: 'Men', rating: 0 },
                { id: 2, path: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg', 
                name: 'DNK  blue Shoes', price: '$120.00', category: 'Men', rating: 0 },
                { id: 3, path: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-m-jeans1-300x300.jpg', name: 'Dark Brown Jeans', price: '$12.00', category: 'Men', rating: 0 },
                { id: 4, path: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-m-jeans1-300x300.jpg', 
                name: 'Dark Denim Jeans', price: '$12.00', category: 'Men', rating: 0 },
                { id: 5, path: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans4-300x300.jpg',
                 name: 'Basic Gray Jeans', price: '$150.00', category: 'Men', rating: 0 },
                { id: 6, path: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans1-300x300.jpg', 
                name: 'Blue Denim Shorts', price: '$120.00', category: 'woMen', rating: 0 },
                { id: 7, path: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory2-300x300.jpg',
                 name: 'Anchor Bracelet', price: '$80.00', category: 'Accesssories', rating: 0 },
                { id: 8, path: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory1-300x300.jpg', name: 'Boho Bangle Bracelet', price: '$120.00', category: 'Accesssories', rating: 0 },
                { id: 9, path: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag1-300x300.jpg',
                 name: 'Light Brown Purse', price: '$990.00', category: 'Accesssories', rating: 0 },
                { id: 10, path: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag3-300x300.jpg',
                 name: 'Bright Red Flag', price: '$90.00', category: 'Accesssories', rating: 0 },
            ],
            filteredImgs: [],
            total: 0
        }
    },
    created: async function () {
        const { id } = this.$route.params;
        this.filteredImgs = this.images.filter((f) => f.id == id)
        // this.filteredImgs=result
        // console.log("r", result[0].id)
        console.log(12,this.filteredImgs[0])
        console.log(12,this.filteredImgs[0].path)

    },
    methods: {
        addToCart() {
            // console.log("items",id)
            console.log("total", this.total)
            this.$store.commit('addToCart', this.total);
        }
    }
}
</script>

<style scoped>
section {
    padding-top: 100px;
    display: flex;
    flex-direction: row;
    background: #d5dce2;
    padding-left: 30px;
}

h1 {
    font-size: 34px;
    padding: 30px 0;
}

.image-zoom {
    position: relative;
    display: inline-block;
    overflow: hidden;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    padding: 40px;
    width: 1400px;
}

.image-zoom img {
    display: block;
    transition: transform 0.3s ease-out;
    width: 100%;
    object-fit: contain;
}

.image-zoom:hover img {
    transform: scale(1.5);
}

.product-content {
    padding: 40px;
}
</style>