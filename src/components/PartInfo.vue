<template>
  <form>
    <header>
      <h3>Parts Infomation</h3>
    </header>
    <br>
  <label>Part Type</label>
  <select v-model="part_type" required>
    <option value="Internal">Internal </option>
    <option value="External">External </option>
  </select>
  <label>Part Size</label>
  <select v-model="part_size" required>
    <option value="Small">Small </option>
    <option value="Medium">Medium </option>
    <option value="Large">Large </option>
  </select>
  <label>Part Description</label>
  <input type="text" v-model = "part_des" required>
  <label>Belongs To Machine ID</label>
  <input type="number" v-model="machine_id" required>
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
            part_type : '',
            part_size : '',
            part_des : '',
            machine_id : ''
        }
    },
    methods : {
        create(){
        return axios.post("http://localhost:3000/api/partinfo/create", 
         {
             part_type : this.part_type,
             part_size : this.part_size,
             part_des : this.part_des,
             machine_id : this.machine_id
            }).then((response) => {
              
              console.log(response.data)
              this.part_type = ''
              this.part_size = ''
              this.part_des = ''
              this.machine_id = ''
              
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