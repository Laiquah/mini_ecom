<template>
    <div>
        <div class="row justify-content-center gap-3">
            <h3>User Interface</h3>
        </div>
        <div class="row justify-content-center gap-3" v-if="users">
            <div class="card" style="width: 18rem;" v-for="user in users" :key="user">
                <img :src="user.profileUrl" class="card-img-top" :alt="user.username">
                <div class="card-body">
                  <h5 class="card-title">{{ user.username }}</h5>
                  <p class="card-text">{{ user.userEmail }}</p>
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