<template>
  <form>
  <header>
    <h3>Emergency Repair</h3>
  </header>
  <label>Machine ID</label>
  <input type="number" v-model="machine_id" required>
  <label>Date For Emergency Repair</label>
  <input type="date" v-model="e_date" required>
  <label>Reason For Emergency Repair</label>
  <select v-model="e_reason" required>
    <option value="Sudden Malfunction">Sudden malfunction</option>
    <option value="Part Broken">Part broken during it's work time</option>
  </select>
  <label>Repair by Staff ID</label>
  <input type="number" v-model="staff_id" required>

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
    data() {
        return {
            machine_id : '',
            e_date : '',
            e_reason : '',
            staff_id : ''
        }
    },
    methods:{
    create(){
        return axios.post("http://localhost:3000/api/emergency/create", 
         {
             machine_id : this.machine_id,
             e_date : this.e_date,
             e_reason : this.e_reason,
             staff_id : this.staff_id
            }).then((response) => {
              
              console.log(response.data)
              this.machine_id =  ''
              this.e_date = ''
              this.e_reason = ''
              this.staff_id = ''
              
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
  margin: 30px;
  background: rgb(209, 205, 205);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  position: relative;
  left: 570px;
  
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