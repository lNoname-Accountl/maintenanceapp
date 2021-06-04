
<template>
<form>
<div>
        <h1>Registration Page</h1>
        <br>
        <br>
        <input type="text" name ="username" v-model = "regis.username" placeholder="Username">
                <br>

        <input type="password" name ="password" v-model = "regis.password" placeholder="Password">
                <br>

        <input type="email" name ="email" v-model= "regis.email" placeholder ="Email">
                <br>

        <input type="number" name ="credit" v-model= "regis.credit" placeholder ="Credit card number">
                <br>

        <button type ="button" v-on:click ="done()">Finish and back to login</button>
        
    </div>    
    </form>
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


form{
  max-width: 420px;
  position: absolute;
  right: 50%;
  background: rgb(209, 205, 205);
  text-align: left;
  position: relative;
  left: 570px;
  padding: 40px;
  border-radius: 10px;

}

h1{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(0, 0, 0);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 30px;
  font-weight: regular;
}
input, select, option{
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border:none;
  border-bottom: 1px solid #ddd;
  color: #555;
  border-radius: 15px;

}


button{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: rgba(23, 64, 246, 0.924);
  border: 0;
  position: relative;
  left: 117px;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  
}
</style>