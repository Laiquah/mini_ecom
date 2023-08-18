<template>
    <div>
        <div class="row justify-content-center gap-3">
            <h3>User Interface</h3>
        </div>
        <div class="row justify-content-center gap-3" v-if="products">
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
        </div>
        <div class="row justify-content-center gap-3" v-else>
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
        computed() {
            return this.$store.state.users
        },
        mounted() {
            this.$store.dispatch('fetchUsers')
        }
    }
</script>

<style scoped>

</style>