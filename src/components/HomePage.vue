<template>
  <div class = "menu">
    <button class = "menuOne" v-on:click = "manager()">Manager</button>
    <button class = "menuTwo" v-on:click = "technician()">Technician</button>
    <button class = "menuThree" v-on:click = "staff()">Staff</button>

    <div class = "menu-center-top" v-on:click = "aboutus()">What is fixAble?</div>

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
       manager(){
       this.$router.replace({name:"manajorall"});
       },
       technician(){
       this.$router.replace({name:"technicianall"});
       },
       aboutus(){
       this.$router.replace({name:"searchmachine"});
       },
       staff(){
       this.$router.replace({name:"staffall"});
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