<template>
    <div>
    <h1>Wrong password</h1>
    <button type ="button" v-on:click ="back()">Back to login</button>
    </div>
</template>

<script>

export default ({
   methods: {
            back(){
   
            this.$router.replace({name:"login"});
               
            }
        }
})
</script>

