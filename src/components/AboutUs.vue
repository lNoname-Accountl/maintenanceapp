<template>
    <div>
    <h1>About us test</h1>
    <button type ="button" v-on:click ="dice()">Back to creation</button>
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


<style>

h1{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(0, 0, 0);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 30px;
  font-weight: regular;
}

</style>