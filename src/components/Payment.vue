<template>
  <form >
  <label>Receipt Number</label>
  <input type="number" v-model= "receipt">
  <label>Service ID</label>
  <input type="number" v-model = "sid">
  <label>Date</label>
  <input type="date" v-model = "date">
  </form>
</template>

<script>
export default {
    data(){
        return{
             receipt:'',
             sid:'',
             date: ''
            
        }
       
        
    }
    

}
</script>

<style>

</style>