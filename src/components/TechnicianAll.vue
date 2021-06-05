<template>
  <div class = "menu">

    <button class = "menuOne" v-on:click = "maintenancelog()">Create New Log</button>
    <button class = "menuTwo" v-on:click = "emergencyrepair()">For Emergency Repair</button>
    <button class = "menuThree" v-on:click = "partinfo()">Import New Part Info</button>

    <button class = "menuFour" v-on:click = "partrequest()">Request Part</button>

    <button class = "menuFive" v-on:click = "searchmachine()">Search For Machine</button>

    <div class = "logo" v-on:click = "homepage()"><img src="../assets/Logo1.png"></div>

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
       homepage(){
       this.$router.replace({name:"homepage"});
       },
       searchmachine(){
       this.$router.replace({name:"searchmachine"});
       }
    }

}
</script>

<style scoped >


.menu{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    text-align: center;
   
}
.menuOne{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    font-size: 15px;
    text-align: center;
    color: white;
    position: absolute;
    right: 55%;
    width: 150px;
    height: 50px;
    top: 500px;
    border: none;
    border-radius: 50px;
  background: rgba(23, 64, 246, 0.924);

}
.menuTwo{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    font-size: 15px;
    text-align: center;
  background: rgba(23, 64, 246, 0.924);
  border-radius: 50px;
  color: white;
    position: absolute;
    right: 36%;
    width: 150px;
    height: 50px;
    top: 500px;
    border: none;

}

.menuThree{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    font-size: 15px;
    text-align: center;
  background: rgba(23, 64, 246, 0.924);
  border-radius: 50px;
  color: white;
    position: absolute;
    right: 55%;
        bottom: 200px;

    width: 150px;
    height: 50px;
    border: none;

}
.menuFour{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    font-size: 15px;
    text-align: center;
  background: rgba(23, 64, 246, 0.924);
  border-radius: 50px;
  color: white;
    position: absolute;
    right: 36%;
        bottom: 200px;

    width: 150px;
    height: 50px;
    border: none;

}

img{
    width: 50%;
    height: 50%;
}



</style>