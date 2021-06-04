<template>
  <div>
  <h1>Staff ID :{{staff_id}}</h1>
  <h1>Position ID : {{position_id}}</h1>
  <h1>Branch ID : {{branch_id}}</h1>
  <h1>ID Card: {{id_card}}</h1>
  <h1>First Name: {{first_name}}</h1>
  <h1>Last Name: {{last_name}}</h1>
  <h1>Gender : {{gender}}</h1>
  <h1>Address :{{address}}</h1>
  <h1>Phone : {{phone}}</h1>
  <h1>Email : {{email}}</h1>
  <h1>No. of Maintenance : {{num_of_maintenance}}</h1>
  <div >
      <button class="submit" @click= "create()">Submit</button>
      <button class="back" type ="button" v-on:click ="dice()">Back to home</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            staff_id : '',
            position_id : '',
            branch_id : '',
            id_card : '',
            first_name : '',
            last_name : '',
            gender : '',
            address : '',
            phone : '',
            email : '',
            num_of_maintenance : ''
        }
    },
    methods : {
        create(){
        return axios.get(`http://localhost:3000/api/employee/getHighEm`).then((response) => {
            console.log(response.data)
            this.staff_id = response.data.staff_id
            this.position_id = response.data.position_id
            this.branch_id = response.data.branch_id
            this.id_card = response.data.id_card
            this.first_name = response.data.first_name
            this.last_name = response.data.last_name
            this.gender = response.data.gender
            this.address = response.data.address
            this.phone = response.data.phone
            this.email = response.data.email
            this.num_of_maintenance = response.data.num_of_maintenance


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