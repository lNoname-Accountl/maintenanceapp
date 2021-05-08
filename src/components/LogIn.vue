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