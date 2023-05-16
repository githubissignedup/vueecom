<template>
    <section>
        <div >
            <div class="heading-box">
               <h2>Featured Products</h2> 
            </div>
            <div class="img-container">
                <ProductBox
                v-for="img in images"
                :key="img.id"
                :name="img.name"
                :path="img.path"
                :price="img.price"
                :category="img.category"
                :rating="img.rating"
                :id="img.id"
                />
            </div>
        </div>
    </section>
</template>
<script>
import ProductBox from "./UI/ProductBox"
export default {
    components: {
    ProductBox
    },
setup() {
    const images=[
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
    ]
// console.log(images)
    return {
        images
    }
}

}

</script>

<style scoped>
section
{
    background: #f5f7f9;
}

.img-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 91px;
}

.heading-box{
    display: block;
    margin:30px 50px;
    text-align: center;
    padding-top:50px;
    font-size: 24px;
}
</style>