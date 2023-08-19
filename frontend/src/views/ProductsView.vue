<template>
    <div>
        <div class="row justify-content-center gap-3">
            <h3>Products</h3>
        </div>
        <div class="row justify-content-center gap-3" v-if="products">
            <div class="card" style="width: 18rem;" v-for="product in products" :key="product">
                <img :src="product.prodUrl" class="card-img-top" :alt="product.productName">
                <div class="card-body">
                  <h5 class="card-title">{{ product.productName }}</h5>
                  <p class="card-text">{{ product.productDesc }}</p>
                  <p class="card-text">R{{ product.price }}</p>
                </div>
            </div>
        </div>
        <div class="row" v-else>
            <Spinner/>
        </div>
    </div>
</template>

<script>
import Spinner from '../components/SpinnerComp.vue'
    export default {
        components: {
            Spinner
        },
        computed : {
            products() {
                return this.$store.state.products
            }
        },
        mounted() {
            this.$store.dispatch('fetchProducts')
        }
    }
</script>

<style scoped>

</style>