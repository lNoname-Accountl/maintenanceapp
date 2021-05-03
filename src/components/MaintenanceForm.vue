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
    <option value="computer" >Computer</option>
    <option value="refrigerator">Tuyen</option> 
  </select>
  <div v-for = "machine in machines" :key = "machine" class = "pill">
  <span @click = "deleteMach(machine)">{{ machine }}</span>
  </div>

  <button @click= "addMach()">add</button>
  
  <p>Plan : {{ plan }}</p>
  </form>
</template>

<script>
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