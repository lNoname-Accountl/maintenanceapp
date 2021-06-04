<template>
    <div>
    <h1>Customer ID : {{customer_id}}</h1>
    <h1>First Name : {{first_name}}</h1>
    <h1>Last Name : {{last_name}}</h1>
    <h1>Phone Number : {{phone_number}}</h1>
    <h1>No. of Request : {{num_of_request}}</h1>
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
            customer_id : '',
            first_name : '',
            last_name : '',
            phone_number : '',
            num_of_request : ''
        }
    },
    methods: {
        create(){
        return axios.get(`http://localhost:3000/api/request/getHighRequest`).then((response) => {
              
              console.log(response.data)
              this.customer_id = response.data.customer_id
              this.first_name = response.data.first_name
              this.last_name = response.data.last_name
              this.phone_number = response.data.phone_number
              this.num_of_request = response.data.num_of_request
              
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