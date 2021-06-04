<template>

    <div>
    <label>Machine ID:</label>
    <input type="number" v-model = "machsearch">
    <h1>Machine ID :{{machine_id}}</h1>
    <h1>Type Machine :{{type_machine}}</h1>
    <h1>Belongs to Customer ID :{{customer_id}}</h1>
    <div>
      <button class="submit" @click = "create()">Submit</button>
       <button class = "back">Back to home</button>
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
            customer_id : '',
            machsearch : ''
        }
    },
    methods : {
        create(){
        return axios.get(`http://localhost:3000/api/request/getMachinebyID/${this.machsearch}`).then((response) => {
              
              console.log(response.data)
              this.machine_id = response.data.machine_id
              this.type_machine = response.data.type_machine
              this.customer_id = response.data.customer_id
              
            })

        

      }
    
    }
}
</script>

