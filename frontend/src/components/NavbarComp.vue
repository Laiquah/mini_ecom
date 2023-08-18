<template>
  <div>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src="https://i.postimg.cc/9MCg4Ly7/Screenshot-2023-08-18-213254-removebg-preview.png" alt="logo" loading="lazy"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/users">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin">Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register">Register</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.navbar{
  background-color: black;
}

.nav-item{
  margin-left: 1rem;
}

img{
  width: 4rem;
}
</style>