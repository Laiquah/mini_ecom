<template>
    <div>
        <h1 class="h1">keep in touch with us</h1>
        <div class="login-card" id="card">
            <div class="card-header">
              <div class="log">Contact</div>
            </div>
            <form action="https://formspree.io/f/xknlrgwn" method="POST" class="form">
                <div class="form-group">
                  <input required name="name" id="username" type="text" placeholder="first name">
                  <input required name="name" id="username" type="text" placeholder="last name">
                  <input required name="email" id="username" type="text" placeholder="email address">
                  <input required name="number" id="username" type="text" placeholder="contact number">
                </div>
                <div class="form-group" id="form">
                  <input value="submit" type="submit">
                  <input type="reset" value="clear" id="clear">
                </div>
              </form>
            </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#card{
    margin-top: 2rem;
}
.login-card {
    width: 50rem;
    margin: 0 auto;
    padding: 20px;
    margin-bottom: 2rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: white;
    box-shadow: 2px 2px 10px black;
  }

  #form{
    display: flex;
    justify-content: space-between;
  }
  
  #username{
    margin-bottom: 2rem;
  }

  .card-header {
    text-align: center;
    margin-bottom: 20px
  }
  
  .card-header .log {
    margin: 0;
    font-size: 24px;
    color: black;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-size: 18px;
    margin-bottom: 5px;
  }
  
  input[type="text"], input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    transition: 0.5s;
  }
  
  input[type="submit"] {
    width: 25%;
    background-color: black;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  #clear{
    width: 25%;
    background-color: black;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  input[type="submit"]:hover {
    background-color: white;
    color: black;
  }

  #clear:hover {
    background-color: white;
    color: black;
  }
  
  .h1{
    text-decoration: underline;
  }
</style>