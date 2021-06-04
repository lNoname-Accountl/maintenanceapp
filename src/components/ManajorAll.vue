<template>
  <div class = "menu">

    <button class = "a" v-on:click = "maintenancelog()">Maintenance Log</button>
    <button class = "a" v-on:click = "emergencyrepair()">Emergency Repair</button>
    <button class = "a" v-on:click = "partinfo()">Part Info</button>
    <button class = "a" v-on:click = "partrequest()">Part Request</button>

    <button class = "a" v-on:click = "customerinfo()">Customer Info</button>
    <button class = "a" v-on:click = "payment()">Payment</button>
    <button class = "a" v-on:click = "maintenanceform()">Maintenance Form</button>
    <button class = "a" v-on:click = "feedback()">Feedback</button>

    <button class = "a" v-on:click = "staffform()">Staff Form</button>
    <button class = "a" v-on:click = "branchinfo()">Branch Info</button>
    <button class = "a" v-on:click = "editstaff()">Edit Staff</button>

    <button class = "a" v-on:click = "averageanalysis()">Average Analysis</button>
    <button class = "a" v-on:click = "highmaintenance()">High Maintenance</button>
    <button class = "a" v-on:click = "highrepair()">High Repair</button>
    <button class = "a" v-on:click = "highrequest()">High Request</button>
    <button class = "a" v-on:click = "hightype()">High Type</button>

    <div class = "logo"><img src="../assets/Logo1.png"></div>

 </div>




</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
       maintenancelog(){
       this.$router.replace({name:"maintenancelog"});
       },
       emergencyrepair(){
       this.$router.replace({name:"emergencyrepair"});
       },
       partinfo(){
       this.$router.replace({name:"partinfo"});
       },
       partrequest(){
       this.$router.replace({name:"partrequest"});
       },
       home(){

       },
       customerinfo(){
       this.$router.replace({name:"customerinfo"});
       },
       payment(){
       this.$router.replace({name:"payment"});
       },
       maintenanceform(){
       this.$router.replace({name:"maintenanceform"});
       },
       feedback(){
       this.$router.replace({name:"feedback"});
       },
       staffform(){
       this.$router.replace({name:"staffform"});
       },
       branchinfo(){
       this.$router.replace({name:"branchinfo"});
       },
       editstaff(){
       this.$router.replace({name:"editstaff"});
       },
       averageanalysis(){
       this.$router.replace({name:"averageanalysis"});
       },
       highmaintenance(){
       this.$router.replace({name:"highmaintenance"})
       },
       highrepair(){
       this.$router.replace({name:"highrepair"})
       },
       highrequest(){
       this.$router.replace({name:"highrequest"})
       },
       hightype(){
       this.$router.replace({name:"hightype"})
       }
    }

}
</script>

<style scoped>

.menu{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    text-align: center;

}
button{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 
  background: rgba(23, 64, 246, 0.924);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  top: 500px;
}

img{
    width: 50%;
    height: 50%;
}
</style>