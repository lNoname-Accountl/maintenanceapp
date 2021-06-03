<template>
  
  <form >
    <header>
      <h3>Maintenance Log</h3>
    </header>
  <br>
  <label>Maintenance Date</label>
  <input type="date" v-model="maintenance_date" required>
  <label>Machine ID</label>
  <input type="text" v-model = "machine_id" required>
  <label>Description</label>
  <input type="text" v-model = "description" required>
  <label>Error Description</label>
  <input type="text" v-model = "error_description" required>
  <label>Managed by Staff ID</label>
  <input type="number" v-model = "staff_id" required>
  <br>
    <div class="submit" @click = "create()">
      <button>Submit Maintenance Report</button>
    </div>
  
  
  </form>
</template>

<script>
import axios from 'axios';
export default {
  data(){
      return{
      maintenance_date : '',
      machine_id: '',
      description:'',
      error_description:'',
      staff_id : ''
      }
  },
  methods : {
    create(){
        return axios.post("http://localhost:3000/api/maintenancelog/create", 
         {
             maintenance_date : this.maintenance_date,
             machine_id : this.machine_id,
             description : this.description,
             error_description : this.error_description,
             staff_id : this.staff_id

            }).then((response) => {
              
              console.log(response.data)
              
            })

        

      }
    
  }

}
</script>

<style scoped>



form{
  max-width: 400px;
  position: relative;
  left:570px;
  margin: 10px;
  background: rgb(209, 205, 205);
  text-align: left;
  padding: 50px;
  border-radius: 10px;

}

label{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(0, 0, 0);
  display: inline-block;
  margin: 25px 0 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: regular;
}

h3{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(0, 0, 0);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 30px;
  font-weight: regular;
}
input, select, option{

  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border:none;
  border-bottom: 1px solid #ddd;
  color: #555;
  border-radius: 15px;

}

button{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: rgba(23, 64, 246, 0.924);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  
}
.submit{

    text-align: center;
}
</style>