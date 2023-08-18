<template>
  <Navbar/>
    <router-view/>
  <Footer/>
</template>
  


<script>
import Navbar from './components/NavbarComp.vue'
import Footer from './components/FooterComp.vue'
export default{
  components: {
    Navbar,
    Footer
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');

#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
}

a{
  text-decoration: none !important;
  color: white !important;
}
</style>
