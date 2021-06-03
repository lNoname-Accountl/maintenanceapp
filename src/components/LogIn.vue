<template>
  <form >
    <div >
        <h1>Login</h1>
        <br>
        <br>
        <br>
        <input type="text" name ="username" v-model = "input.username" placeholder="Username">
        <input type="password" name ="password" v-model = "input.password" placeholder="Password">
        <button class="log" type ="button" v-on:click ="login()">Login</button>
        <button class="regis" type = "button" v-on:click = "regista()"> Don't have account? Register HERE</button>
    </div>
  </form>
</template>

<script>
    export default {
        name: 'Login',
        data(){
            return{
                input : {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login(){
                if(this.input.username == "manager" && this.input.password == "123") {
                    this.$store.commit("setAuthentication",true);
                    this.$router.replace({name:"maintenancelog"});
                } else {
                    console.log("wrong password or username");
                    this.$router.replace({name:"wrongpassword"});
                }
            },
            regista(){
                this.$router.replace({name: "register"});
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


.regis{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: 0;
  background: none;
  color: rgb(0, 0, 0);
  position:relative;
  left: 800px;
  
}


.log{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: rgba(23, 64, 246, 0.924);
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 20px;
  position:relative;
  left: 590px;
  
}
input{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: black;
  display: block;
  width: 30%;
  position: relative;
  left:580px;
  margin: 10px;
  background: rgb(209, 205, 205);
  text-align: left;
  border-radius: 10px;  box-sizing: border-box;
  border:none;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  color: rgb(0, 0, 0);
  border-radius: 15px;

}

</style>