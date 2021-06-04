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
      <div >
      <button class="submit" @click= "create()">Submit</button>
      <button class="back" type ="button" v-on:click ="dice()">Back to home</button>

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
              this.maintenance_date = ''
              this.machine_id = ''
              this.description = ''
              this.error_description = ''
              this.staff_id =''
              
            })

        

      },
      dice(){
   
            this.$router.replace({name:"homepage"});
               
            }
    
  }

}
</script>

<style scoped>



form{
  max-width: 420px;
  position: absolute;
  right: 50%;
  background: rgb(209, 205, 205);
  text-align: left;
  position: relative;
  left: 570px;
  padding: 40px;
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
.back{
  

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  color: rgb(255, 255, 255);
  background: rgba(23, 64, 246, 0.924);

  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 20px;
  position: relative;
  left: 10px;

}

.submit{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  background: rgba(23, 64, 246, 0.924);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  position: relative;
  left: 230px;
}
</style>