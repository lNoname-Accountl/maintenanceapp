-<template>
  <form>
  <label>Service ID</label>
  <input type="number" v-model = "serviceid" required>
  <label>Repair Completeness Score</label>
    <select v-model = "repairscore" required>
    <option value="" disabled selected>Select your plan</option>
    <option value="1">1</option>
    <option value="2">2 </option>
    <option value="3">3 </option>
    <option value="4">4 </option>
    <option value="5">5 </option>
    </select>
  <label>Service Score</label>
    <select v-model = "servicescore" required>
    <option value="" disabled selected>Select your plan</option>
    <option value="1">1</option>
    <option value="2">2 </option>
    <option value="3">3 </option>
    <option value="4">4 </option>
    <option value="5">5 </option>
    </select>
  <label>Overall Score</label>
    <select v-model = "overallscore" required>
    <option value="" disabled selected>Select your plan</option>
    <option value="1">1</option>
    <option value="2">2 </option>
    <option value="3">3 </option>
    <option value="4">4 </option>
    <option value="5">5 </option>
    </select>

  <label>Other Comment</label>
  <input type="text" v-model = "comment">
  <br>
    <div class="submit">
      <button>Submit Feedback</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return{
      serviceid : '',
      repairscore : '',
      servicescore : '',
      overallscore : '',
      comment : ''
      
    }


  },
  create(){
        return axios.post("http://localhost:8080/api/maintenance/create", 
         {
             serviceid : this.serviceid,
             repairscore : this.repairscore,
             servicescore : this.servicescore,
             overallscore : this.overallscore,
             comment : this.comment
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