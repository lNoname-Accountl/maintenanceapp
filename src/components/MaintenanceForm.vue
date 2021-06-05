<template>
  <form>
    <header>
      <h3>Maintenance Form</h3>
    </header>
    <br>
  <label>Managed By Staff ID</label>
  <input type="number" required v-model = "staff_id">
  <label>For Customer ID</label>
  <input type="number" required v-model = "customer_id"> 
  <label>Date Request</label>
  <input type="date" required v-model = "date_rq"> 

  <label>Plan that customer choose</label>
    <select v-model = "plan" required>
      <option value="" disabled selected>Select your plan</option>
      <option value="Standard">Standard $1000 </option>
      <option value="Premium">Premium $1500 </option>
      <option value="Professional">Professional $2500 </option>
      <option value="Enterprise">Enterprise $4000 </option>

    </select>

  <label>Customer Machine</label>
  <select v-model = "tempMach">
    <option value="Electronic" >Electronic</option>
    <option value="Home Appliance ">Home Appliance</option>
    <option value="Heavy Duty Machine">Heavy Duty Machine</option>
    <option value="Tools">Tools</option>
  </select>
  <div v-for = "machine in type_machine" :key = "machine" class = "pill">
  <span @click = "deleteMach(machine)">{{ machine }}</span>
  </div>
  <button @click= "addMach()">add</button>
  

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
            staff_id : '',
            customer_id : '',
            plan : '',
            tempMach : '',
            type_machine : [],
            date_rq : ''
         
        }
    },
    methods: {
      addMach(){
        this.type_machine.push(this.tempMach);
        this.tempMach = '';
        },
      deleteMach(machine){
        this.type_machine = this.type_machine.filter((item) =>{
          return machine !== item
        })
      },
      create(){
        return axios.post("http://localhost:3000/api/request/create", 
         {
             staff_id : this.staff_id,
             customer_id : this.customer_id,
             plan : this.plan,
             date_rq : this.date_rq,
             type_machine : this.type_machine
            }).then((response) => {
              
              console.log(response.data)
              this.staff_id = ''
              this.customer_id = ''
              this.plan = ''
              this.date_rq = ''
              this.type_machine = ''
              
            })
        },
        dice(){
   
            this.$router.replace({name:"homepage"});
               
            }
      }
    }


</script>

<style scoped>
.pill{
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: rgb(255, 255, 255);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 15px;
  font-size: 12px;
  font-weight: regular;
  color: black;
  cursor: pointer;
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