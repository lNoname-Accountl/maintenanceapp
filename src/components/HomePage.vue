<template>
  <div class = "menu">
    <button class = "menu-left" v-on:click = "login()">Login</button>
    <button class = "menu-right" v-on:click = "register()">Register</button>
    <div class = "menu-center-top" v-on:click = "aboutus()">About us</div>
    <div class = "logo"><img src="../assets/Logo1.png"></div>
    <div class = "background"></div>
  </div>
  
  

</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods: {
       login(){
       this.$router.replace({name:"login"});
       },
       register(){
       this.$router.replace({name:"register"});
       },
       aboutus(){
       this.$router.replace({name:"aboutus"});
       },
       home(){

       }
    }

}
</script>

<style>
body{
    background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(238, 238, 238) 35%, rgb(224, 224, 224) 100%);

}
.menu{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    text-align: center;

}
.menu-left{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    font-size: 20px;
    text-align: center;
    color: white;
    position: absolute;
    left: 38%;
    width: 150px;
    height: 50px;
    top: 500px;
    border: none;

}
.menu-right{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    font-size: 20px;
    text-align: center;
    color: white;
    position: absolute;
    right: 38%;
    width: 150px;
    height: 50px;
    top: 500px;
    border: none;

}
.menu-center-top{
    flex: 1;
    border: 1px solid rgb(136, 133, 133);
    text-align: center;
}
body{
background-image: url("../assets/bg1.png"); 
background-position: center center; 
background-size: 100% 100%; 
    }

img{
    width: 50%;
    height: 50%;
}
</style>