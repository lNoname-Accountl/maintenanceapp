<template>
  <form>
  <label>Plan</label>
    <select v-model = "plan" >
      <option value="" disabled selected>Select your plan</option>
      <option value="Standard">Standard $1000 </option>
      <option value="Premium">Premium $1500 </option>
      <option value="Professional">Professional $2500 </option>
      <option value="Enterprise">Enterprise $4000 </option>

    </select>
  <label>Your Machine</label>
  <select v-model = "tempMach" >
    <option value="Electronic" >Electronic</option>
    <option value="Home Appliance ">Home Appliance</option>
    <option value="Heavy Duty Machine">Heavy Duty Machine</option>
    <option value="Tools">Tools</option>
  </select>
  <div v-for = "machine in machines" :key = "machine" class = "pill">
  <span @click = "deleteMach(machine)">{{ machine }}</span>
  </div>

  <button @click= "addMach()">add</button>
  
  <p>Plan : {{ plan }}</p>
  <br>
    <div class="submit">
      <button>Submit request</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  data() {
        return {
            plan : '',
            tempMach : '',
            machines : []
         
        }
    },
    methods: {
      addMach(){
        this.machines.push(this.tempMach);
        this.tempMach = '';
        },
      deleteMach(machine){
        this.machines = this.machines.filter((item) =>{
          return machine !== item
        })
      },
      create(){
        return axios.post("http://localhost:8080/api/create", 
         {
             machines : this.machines,
             plan : this.plan
            }).then((response) => {
              
              console.log(response.data)
              
            })

        

      }
      }
    }


</script>

<style>
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
</style>