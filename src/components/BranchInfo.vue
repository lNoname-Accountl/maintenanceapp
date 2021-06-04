<template>
  <form>
    

  <header>
      <h3>Branch Information</h3>
  </header>
  <br>
  <label>Branch Name</label>
  <input type="text" required v-model = "branch_name" >

  <label>Branch Phone</label>
  <input 
  oninput="javascript: if (this.value.length != this.maxLength) this.value = this.value.slice(0, this.maxLength);"
  type = "number"
  maxlength = "11"
  v-model = "branch_phone" 
  required
  />

  <label>Branch Address</label>
  <input type="text" required v-model = "branch_address" >

  <br>
    <div >
      <button class="submit" @click= "create()">Submit</button>
      <button class="back" type ="button" v-on:click ="dice()">Back to home</button>

    </div>


 


  </form>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            branch_name : '',
            branch_phone : '',
            branch_address : ''
        }
    },
    methods : {
      create(){
        return axios.post("http://localhost:3000/api/branch/create", 
         {
             branch_name : this.branch_name,
             branch_phone : this.branch_phone,
             branch_address : this.branch_address
            }).then((response) => {
              
              console.log(response.data)
              this.branch_name = ''
              this.branch_phone = ''
              this.branch_address = ''
              
            })

        

      },
      dice(){
   
            this.$router.replace({name:"homepage"});
               
            }
    }
}
</script>

<style scoped>


form{
  max-width: 420px;
  position: absolute;
  right: 50%;
  background: rgb(209, 205, 205);
  text-align: left;
  position: relative;
  left: 570px;
  padding: 40px;
  border-radius: 10px;

}

.backb{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(255, 255, 255);
  border: 50;
  position: relative;
  bottom: 50px;
  padding: 10px 10px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;

}
label{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(0, 0, 0);
  display: inline-block;
  margin: 25px 0 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: regular;
}

input, select, option{
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border:none;
  border-bottom: 1px solid #ddd;
  color: #555;
  border-radius: 15px;

}

h3{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(0, 0, 0);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 30px;
  font-weight: regular;
}

.back{
  

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  color: rgb(255, 255, 255);
  background: rgba(23, 64, 246, 0.924);

  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 20px;
  position: relative;
  left: 10px;

}

.submit{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  background: rgba(23, 64, 246, 0.924);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  position: relative;
  left: 230px;
}
</style>