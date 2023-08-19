<template>
  <div class="home">
      <h1 class="text">
        Welcome to SneakerHaven!
      </h1>
      <h3 class="text">
        Step into Style, Step into SneakerHaven!
      </h3>
      <button class="btn text"><a href="/about" class="aa">more about us</a></button>
  </div>
</template>

<script>

export default {
  
}
</script>

<style scoped>
.home{
  background-image: url("https://i.postimg.cc/44FZgGQh/taylor-smith-a-DZ5-YIued-Qg-unsplash.jpg");
  background-attachment: fixed;
  height: 120vh;
  background-size: cover;
  background-repeat: no-repeat;
}

.btn{
  background-color: black;
  color: white;
  height: 3rem;
  width: 15rem;
  border-radius: 5rem;
}

.btn:hover{
  background-color: rgb(255, 255, 255)!important;
}

a:hover {
  color: rgb(0, 0, 0) !important;
}
.text{
  position: relative;
  top: 30%;
  color: white;
}
</style>