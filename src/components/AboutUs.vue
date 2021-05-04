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