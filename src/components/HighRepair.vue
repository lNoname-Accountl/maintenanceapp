<template>
    <div>
    <h1>Machine ID: {{machine_id}}</h1>
    <h1>Machine Type: {{type_machine}}</h1>
    <h1>Amount of repair: {{num_of_repair}}</h1>
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
            machine_id : '',
            type_machine : '',
            num_of_repair : ''
        }
    },
    methods: {
        create(){
        return axios.get(`http://localhost:3000/api/emergency/getHighRepair`).then((response) => {
              
              console.log(response.data)
              this.machine_id = response.data.machine_id
              this.type_machine = response.data.type_machine
              this.num_of_repair = response.data.num_of_repair
              
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