<template>
    <div>
    <h1>Please login first </h1>
    <button type ="button" v-on:click ="dice()">Back to Login page</button>
    </div>
</template>

<script>

export default ({
   methods: {
            dice(){
   
            this.$router.replace({name:"login"});
               
            }
        }
})
</script>