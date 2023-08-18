<template>
    <div>
        <div class="row justify-content-center gap-3">
            <h3>Products</h3>
        </div>
        <div class="row justify-content-center gap-3" v-if="products">
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">type of jean</h5>
                  <p class="card-text">price</p>
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