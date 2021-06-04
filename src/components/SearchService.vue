<template>
    <div>
    <label>Service ID:</label>
    <input type="number" v-model = "servicesearch">
    <h1>Service ID :{{service_id}}</h1>
    <h1>Staff ID :{{staff_id}}</h1>
    <h1>Belongs to Customer ID :{{customer_id}}</h1>
    <h1>Date Request : {{date_rq}}</h1>
    <h1>Plan : {{plan}}</h1>
    <div>
      <button class="submit" @click = "create()">Search</button>
       <button class = "back">Back to home</button>
    </div>

    </div>
    

  
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            service_id : '',
            staff_id : '',
            customer_id : '',
            date_rq : '',
            plan : '',
            servicesearch : ''
        }
    },
    methods : {
        create(){
        return axios.get(`http://localhost:3000/api/request/getRequestbyID/${this.servicesearch}`).then((response) => {
              
              console.log(response.data)
              this.service_id = response.data.service_id
              this.staff_id = response.data.staff_id
              this.customer_id = response.data.customer_id
              this.date_rq = response.data.date_rq
              this.plan = response.data.plan
              
            })

        

      }
    
    }
}
</script>

<style>

</style>