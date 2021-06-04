<template>
    <div>
    <h1>Machine Type : {{type_machine}}</h1>
    <h1>No. of Machine : {{num_of_machine}}</h1>
    <div >
      <button class="submit" @click= "create()">Submit</button>
      <button class="back" type ="button" v-on:click ="dice()">Back to home</button>
    </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            type_machine : '',
            num_of_machine : ''
        }
    },
    methods: {
        create(){
        return axios.get(`http://localhost:3000/api/request/getHighType`).then((response) => {
              
              console.log(response.data)
              this.type_machine = response.data.type_machine
              this.num_of_machine = response.data.num_of_machine
              
            })

        },
        dice(){
   
            this.$router.replace({name:"homepage"});
               
            }
    }
}
</script>

<style>

</style>