<template>
  <div id = "homepage">
    <div id = "homepage-background" class = "section">
      <div class ="page-container">
        <div class = "section">
          <img 
            id="logo"
            src="../assets/Logo1.png"
            />
        </div>
          <div class = "menu">
            <button class = "menuOne" v-on:click = "manager()">Manager</button>
            <button class = "menuTwo" v-on:click = "technician()">Technician</button>
            <button class = "menuThree" v-on:click = "staff()">Staff</button>
          </div>
          <div class = "menu-center-top" v-on:click = "aboutus()">What is fixAble?</div>
      </div>
    </div>
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
       this.$router.replace({name:"aboutus"});
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

#homepage {
  background-image: url("../assets/1433321.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}

#logo{
    width: 60%;
    height: 60%;
}

.section{
  display:flex;
  justify-content: center;
  align-items:center;
}

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
    left: 45.5%;
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
    right: 30.5%;
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
    left: 30.5%;
    width: 150px;
    height: 50px;
    top: 500px;
    border: none;

}
.menu-center-top{
    position: absolute;
    left: 45.5%;
    bottom: 50%;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    color: white;
    border-radius: 100px;
    background: rgba(95, 95, 95, 0.924);
    width: 150px;
}

</style>