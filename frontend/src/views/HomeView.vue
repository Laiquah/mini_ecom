<template>
  <div class="home">
      <h1>
        Welcome to SneakerHaven!
      </h1>
      <h3>
        Step into Style, Step into SneakerHaven!
      </h3>
      <button><a href="/about">more about us</a></button>
  </div>
</template>

<script>

export default {
  
}
</script>

<style scoped>
.home{
  background-image: url("https://i.postimg.cc/44FZgGQh/taylor-smith-a-DZ5-YIued-Qg-unsplash.jpg");
  height: 120vh;
  background-size: cover;
  background-repeat: no-repeat;
}

button{
  background-color: black;
  color: white;
  height: 3rem;
  width: 15rem;
  border-radius: 5rem;
}

button:hover{
  background-color: white;
  color: black !important;
}
</style>