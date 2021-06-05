-<template>
  <form>
  <header>
    <h3>Feedback</h3>
  </header>
  <label>Service ID</label>
  <input type="number" v-model = "service_id" required>
  <label>Repair Completeness Score</label>
    <select v-model = "r_score" required>
    <option value="" disabled selected>Select your score</option>
    <option value="1">1</option>
    <option value="2">2 </option>
    <option value="3">3 </option>
    <option value="4">4 </option>
    <option value="5">5 </option>
    </select>
  <label>Service Score</label>
    <select v-model = "s_score" required>
    <option value="" disabled selected>Select your score</option>
    <option value="1">1</option>
    <option value="2">2 </option>
    <option value="3">3 </option>
    <option value="4">4 </option>
    <option value="5">5 </option>
    </select>
  <label>Overall Score</label>
    <select v-model = "all_score" required>
    <option value="" disabled selected>Select your score</option>
    <option value="1">1</option>
    <option value="2">2 </option>
    <option value="3">3 </option>
    <option value="4">4 </option>
    <option value="5">5 </option>
    </select>

  <label>Other Comment</label>
  <input type="text" v-model = "comment">
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
    return{
      service_id : '',
      r_score : '',
      s_score : '',
      all_score : '',
      comment : ''
      
    }


  },
  methods : {create(){
        return axios.post("http://localhost:3000/api/feedback/create", 
         {
             service_id : this.service_id,
             r_score : this.r_score,
             s_score : this.s_score,
             all_score : this.all_score,
             comment : this.comment
            }).then((response) => {
              
              console.log(response.data)
              this.service_id = ''
              this.r_score = ''
              this.s_score = ''
              this.all_score = ''
              this.comment = ''
              
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