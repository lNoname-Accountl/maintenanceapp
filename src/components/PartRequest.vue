<template>
  <form>
    <header>
      <h3>Parts Request</h3>
    </header>
    <br>
  <label>Part ID that need replacement</label>
  <input type="number" v-model = "part_id" required>
  <label>Request by Staff ID</label>
  <input type="number" v-model = "staff_id" required>
  <label>Reason for requesting</label>
    <select v-model = "part_reason" required>
    <option value="Broken">Part is broken </option>
    <option value="Old">Part is old </option>
    <option value="Customer Request">Customer requested </option>
    </select>
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
            part_id : '',
            staff_id : '',
            part_reason : ''
        }
    },
    methods : {
        create(){
        return axios.post("http://localhost:3000/api/partrq/create", 
         {
             part_id : this.part_id,
             staff_id : this.staff_id,
             part_reason : this.part_reason
            }).then((response) => {
              
              console.log(response.data)
              this.part_id = ''
              this.staff_id = ''
              this.part_reason = ''
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