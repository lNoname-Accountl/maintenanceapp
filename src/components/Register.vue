
<template>
<div>
        <h1>Registration Page</h1>
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
