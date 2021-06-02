<template>
  <form>
  <label>Machine ID</label>
  <input type="number" v-model="machineid" required>
  <label>Date For Emergency Repair</label>
  <input type="date" v-model="date" required>
  <label>Reason For Emergency Repair</label>
  <select v-model="reason" required>
    <option value="Sudden Malfunction">Sudden malfunction</option>
    <option value="Part Broken">Part broken during it's work time</option>
  </select>
  <label>Repair by Staff ID</label>
  <input type="number" v-model="staffid" required>

  <br>
    <div class="submit">
      <button>Submit</button>
    </div>

  </form>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            machineid : '',
            date : '',
            reason : '',
            staffid : ''
        }
    },
    create(){
        return axios.post("http://localhost:8080/api/maintenance/create", 
         {
             machineid : this.machineid,
             date : this.date,
             reason : this.reason,
             staffid : this.staffid
            }).then((response) => {
              
              console.log(response.data)
              
            })

        

      }

}
</script>

<style>


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



input[type="radio"]{
  display: inline-block;
  width: 10px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;

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
</style>