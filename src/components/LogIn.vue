<template>
    <div>
        <h1>Login Page</h1>
        <input type="text" name ="username" v-model = "input.username" placeholder="Username">
        <input type="password" name ="password" v-model = "input.password" placeholder="Password">
        <button type ="button" v-on:click ="login()">Login</button>
        <button type = "button" v-on:click = "regista()">Register</button>
    </div>
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


<style>

#one{
  color: rgba(255, 255, 255, 0.931);
  display: inline-block;
  margin: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

form{
  max-width: 400px;
  position: relative;
  left:570px;
  margin: 10px;
  background: rgb(209, 205, 205);
  text-align: left;
  padding: 50px;
  border-radius: 10px;
}

label{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(0, 0, 0);
  display: inline-block;
  margin: 25px 0 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: regular;
}

h3{
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

input[type="radio"]{
  display: inline-block;
  width: 10px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;

}
button{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: rgba(23, 64, 246, 0.924);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  
}
</style>