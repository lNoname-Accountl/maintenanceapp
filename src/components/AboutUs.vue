<template>
    <div>
    <h1>About us</h1>
    <p>This is maintenance company naja ajarn</p>
    <button class="submit" type ="button" v-on:click ="dice()">Back to creation</button>
    </div>
</template>

<script>

export default ({
   methods: {
            dice(){
   
            this.$router.replace({name:"homepage"});
               
            }
        }
})
</script>


<style scoped>

h1{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(0, 0, 0);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 30px;
  font-weight: regular;
}

p{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  text-align: center;
}

button{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: relative;
  left: 46%;

  background: rgba(23, 64, 246, 0.924);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: rgb(255, 255, 255);
  border-radius: 20px;
  
}


</style>