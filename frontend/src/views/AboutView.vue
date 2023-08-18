<template>
  <div>
    <div class="container">
      <h1 class="h1">summary about our company</h1>
      <p>Sneaker Haven is a haven for sneaker enthusiasts, offering a diverse collection of iconic classics, limited releases, and cutting-edge designs. Beyond a retail destination, it's a community-driven platform that celebrates the cultural significance of sneakers while promoting responsible consumerism and engagement with like-minded individuals.</p>
    </div>
    <div class="con">
      <h1 class="h1">meet our team</h1>
      <div class="cards">
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://i.postimg.cc/DZjPBz5x/C12-C2-Eighton-Lee-Paulse-2-removebg-preview.png" class="img-fluid rounded-start" alt="eighton" loading="lazy">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Eighton Paulse</h5>
                <p class="card-text">He is the founder of SneakerHaven.</p>
                <p class="card-text"><a href="mailto:eightonleepaulse@gmail.com">email</a></p>
                <p class="card-text"><a href="tel:0679906093">contact number</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://i.postimg.cc/DZjPBz5x/C12-C2-Eighton-Lee-Paulse-2-removebg-preview.png" class="img-fluid rounded-start" alt="eighton" loading="lazy">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Eighton Paulse</h5>
                <p class="card-text">He is the founder of SneakerHaven.</p>
                <p class="card-text"><a href="mailto:eightonleepaulse@gmail.com">email</a></p>
                <p class="card-text"><a href="tel:0679906093">contact number</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{

}
</script>

<style scoped>
.h1{
  text-decoration: underline;
}

.card{
  background-color: black;
  color: white;
  margin: 4rem;
}

.card-title{
  font-size:xx-large;
  text-decoration: underline;
}

.card-body{
  text-align: center;
  margin-top: 2rem;
}

.cards{
  display: flex;
  justify-content: center;
}
</style>