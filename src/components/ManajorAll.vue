<template>
  <div class = "menu">
    <div class = "logo" v-on:click = "homepage()"><img src="../assets/Logo1.png"></div>

    <button class = "1" v-on:click = "maintenancelog()">Create Maintenance Log</button>
    <button class = "2" v-on:click = "emergencyrepair()">Emergency Repair Form</button>
    <button class = "3" v-on:click = "partinfo()">Import Part Info</button>
    <button class = "4" v-on:click = "partrequest()">Request Part</button>

    <button class = "5" v-on:click = "customerinfo()">Create New Customer Info</button>
    <button class = "6" v-on:click = "payment()">Create Receipt</button>
    <button class = "7" v-on:click = "maintenanceform()">Create Request</button>
    <button class = "8" v-on:click = "feedback()">Create Feedback</button>

    <button class = "9" v-on:click = "staffform()">Create Staff Info</button>
    <button class = "10" v-on:click = "branchinfo()">Import New Branch</button>
    <button class = "11" v-on:click = "editstaff()">Edit Staff Info</button>

    <button class = "11" v-on:click = "averageanalysis()">Average Overall Score From Feedback</button>
    <button class = "12" v-on:click = "highmaintenance()">Staff That Perform Highest Maintenance</button>
    <button class = "13" v-on:click = "highrepair()">Machine Type That Are Repair Most</button>
    <button class = "14" v-on:click = "highrequest()">Customer With Highest Request</button>
    <button class = "15" v-on:click = "hightype()">Highest Machine Type In Our Service</button>
    <button class = "16" v-on:click = "search()">Search for Staff Info</button>



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
       },
       homepage(){
       this.$router.replace({name:"homepage"})
       },
       search(){
       this.$router.replace({name:"searchstaff"})
       }
    }

}
</script>



<style scoped >


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
  margin-left: 20px;
  color: white;
  border-radius: 20px;
  
}


img{
    width: 50%;
    height: 50%;
}



</style>
