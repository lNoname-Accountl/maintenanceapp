<template>
  <form>
    <header>
      <h3>Edit Staff Form</h3>
    </header>
    <br>
    <label>Edit Staff ID No.</label>
    <input type="number" required v-model = "staff_id">
    <label>First Name: </label>
    <input type = "text" required v-model = "first_name">

    <label>Last Name: </label>
    <input type="text" required v-model = "last_name">


    <label>ID No.:</label>
    <input oninput="javascript: if (this.value.length != this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        type = "number"
        maxlength = "13" required v-model = "id_card">
    
    <label>Gender</label>
    <div>
      <input type="radio" id="one" value="male" v-model="gender">
      <label for="one">Male</label>
    </div>
   
    <div>
      <input type="radio" id="one" value="female" v-model="gender">
      <label for="two">Female</label>
      
    </div>
    

    <label>Select Position</label>
    <select v-model = "position_id" required>
      <option value= "M001" >Manager </option>
      <option value= "T002">Technician </option>
      <option value= "S003">Staff </option>

    </select>

    <label>Address:</label>
    <input type="text" v-model = "address" required>

    <label>Email:</label>
    <input type="email" required v-model="email">

    <label>Phone Number:</label>
    <input oninput="javascript: if (this.value.length != this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        type = "number"
        maxlength = "11" v-model = "phone" required>

    <label>Branch ID:</label>
    <input type="number" v-model = "branch_id" required>
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
            staff_id : '',
            first_name : '',
            last_name : '',
            id_card : '',
            position_id: '',
            address : '',
            gender:'',
            email : '',
            phone : '',
            branch_id : ''
        }
    },
    methods : { create(){
        return axios.post("http://localhost:3000/api/employee/editEmployee", 
         {
            staff_id : this.staff_id, 
            first_name : this.first_name,
            last_name : this.last_name,
            id_card : this.id_card,
            position_id: this.position_id,
            address : this.address,
            gender: this.gender,
            email : this.email,
            phone : this.phone,
            branch_id : this.branch_id
            }).then((response) => {
            console.log(response.data)
            this.staff_id = ''
            this.first_name = ''
            this.last_name = ''
            this.id_card = ''
            this.position_id = ''
            this.address = ''
            this.gender =''
            this.email = ''
            this.phone = ''
            this.branch_id = ''
              
            })

        

      },
      
      dice(){
   
            this.$router.replace({name:"homepage"});
               
            }
    }
}
</script>

<style scoped >

h3{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(0, 0, 0);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 30px;
  font-weight: regular;
}

form{
  max-width: 400px;
  position: relative;
  left:570px;
  margin: 10px;
  background: rgb(209, 205, 205);
  text-align: left;
  padding: 50px;
  border-radius: 10px;

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

input[type="radio"]{
  display: inline-block;
  width: 10px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;

}
button{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  background: rgba(23, 64, 246, 0.924);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  
}

.submit{

    text-align: center;
}
</style>