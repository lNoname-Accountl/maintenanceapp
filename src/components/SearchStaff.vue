<template>
<form>
    <div>
    <label>Search For Staff ID:</label>
    <input type="number" v-model = "staffsearch">
    <h1>Staff ID :{{staff_id}}</h1>
    <h1>First Name :{{first_name}}</h1>
    <h1>Last Name :{{last_name}}</h1>
    <h1>Position ID :{{position_id}}</h1>
    <h1>Branch ID :{{branch_id}}</h1>
    <h1>ID Card :{{id_card}}</h1>
    <h1>Gender :{{gender}}</h1>
    <h1>Email :{{email}}</h1>
    <h1>Phone :{{phone}}</h1>
    <h1>Address :{{address}}</h1>
      <div >
      <button class="submit" @click= "create()">Submit</button>
      <button class="back" type ="button" v-on:click ="dice()">Back to home</button>

    </div>


    </div>
    
</form>
  
</template>

<script>
import axios from 'axios';
export default {
    data(){
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
            branch_id : '',
            staffsearch : ''
        }
    },
    methods : {
        create(){
        return axios.get(`http://localhost:3000/api/employee/getEmployeebyID/${this.staffsearch}`).then((response) => {
              
              console.log(response.data)
              this.staff_id = response.data.staff_id
              this.first_name = response.data.first_name
              this.last_name = response.data.last_name
              this.id_card = response.data.id_card
              this.position_id = response.data.position_id
              this.address = response.data.address
              this.gender = response.data.gender
              this.email = response.data.email
              this.phone = response.data.phone
              this.branch_id = response.data.branch_id
            })

        

      },
      
      dice(){
   
            this.$router.replace({name:"homepage"});
               
            }
    
    }
}
</script>

<style>

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
  font-weight: lighter;
}


h1{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(0, 0, 0);
  text-align: left;
  text-transform: lowercase;
  letter-spacing: 1px;
  font-size: 30px;
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

button{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: rgba(23, 64, 246, 0.924);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  
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
