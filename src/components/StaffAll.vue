<template>
  <div class = "menu">
    <button class = "menuOne" v-on:click = "customerinfo()">Create New Customer Info</button>
    <button class = "menuTwo" v-on:click = "payment()">Create Receipt</button>
    <br>
    <br>
    <br>
    <button class = "menuThree" v-on:click = "maintenanceform()">Create Request</button>
    <button class = "menuFour" v-on:click = "feedback()">Create Feedback</button>

    <button class = "menuFive" v-on:click = "search()">Search Request</button>


    <div class = "logo" v-on:click = "homepage()"> <img src="../assets/Logo1.png"></div>



</div>



</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
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
       home(){

       },
       homepage(){
       this.$router.replace({name:"homepage"});
       },
       search(){
       this.$router.replace({name:"searchservice"});
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