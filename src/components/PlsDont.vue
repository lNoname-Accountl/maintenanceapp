<template>
    <div>
    <h1>Don't be a dick</h1>
    <button type ="button" v-on:click ="dice()">Back here you little shit</button>
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