<template>
  <div class = "menu">

    <button class = "menuOne" v-on:click = "maintenancelog()">Maintenance Log</button>
    <button class = "menuTwo" v-on:click = "emergencyrepair()">Emergency Repair</button>
    <button class = "menuThree" v-on:click = "partinfo()">Part Info</button>

    <button class = "menuFour" v-on:click = "partrequest()">Part Request</button>

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
    font-size: 20px;
    text-align: center;
    color: white;
    position: absolute;
    left: 45.7%;
    width: 150px;
    height: 50px;
    top: 500px;
    border: none;
    border-radius: 50px;
  background: rgba(23, 64, 246, 0.924);

}
.menuTwo{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    font-size: 20px;
    text-align: center;
  background: rgba(23, 64, 246, 0.924);
  border-radius: 50px;
  color: white;
    position: absolute;
    right: 31%;
    width: 150px;
    height: 50px;
    top: 500px;
    border: none;

}

.menuThree{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    font-size: 20px;
    text-align: center;
  background: rgba(23, 64, 246, 0.924);
  border-radius: 50px;
  color: white;
    position: absolute;
    right: 60%;
    width: 150px;
    height: 50px;
    top: 500px;
    border: none;

}
.menu-center-top{
    position: absolute;
    left: 47%;
    bottom: 50%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    color: rgba(23, 64, 246, 0.924);
}


img{
    width: 50%;
    height: 50%;
}



</style>