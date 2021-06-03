
<template>
<div>
        <h1>Registration Page</h1>
        <br>
        <br>
        <input type="text" name ="username" v-model = "regis.username" placeholder="Username">
        <input type="password" name ="password" v-model = "regis.password" placeholder="Password">
        <input type="email" name ="email" v-model= "regis.email" placeholder ="Email">
        <input type="number" name ="credit" v-model= "regis.credit" placeholder ="Credit card number">
        <button type ="button" v-on:click ="done()">Finish and back to login</button>
        
    </div>    
</template>

<script>
export default {
    data() {
        return {
            regis : {
                username: "",
                password: "",
                email: "",
                credit:""
            }
            
        }
    },
    methods: {
            done(){
   
            this.$router.replace({name:"login"});
               
            }
        }
}

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
input{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: black;
  display: block;
  width: 30%;
  position: relative;
  left:560px;
  margin: 10px;
  background: rgb(255, 255, 255);
  text-align: left;
  padding: 10px;


}


button{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: rgba(23, 64, 246, 0.924);
  border: 0;
  position: relative;
  left: 570px;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  
}
</style>