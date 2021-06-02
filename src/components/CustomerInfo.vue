<template>
<form>
<label>First Name</label>
<input type="text" required v-model="firstname">
<label>Last Name</label>
<input type="text" required v-model="lastname">
<label>Phone Number</label>
<input type="number" required v-model = "phonenumber">
<label>Credit Card Type</label>
    <select v-model = "credittype" required>
      <option value="" disabled selected>Select your plan</option>
      <option value="visa">Visa </option>
      <option value="mastercard">Master Card </option>
    </select>
<label>Expiration Date</label>
<input type="date" v-model = "expiredate" required>
<br>
    <div class="submit">
      <button>Submit Info</button>
    </div>
</form>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            firstname : '',
            lastname : '',
            phonenumber : '',
            credittype : '',
            expiredate : ''
         
        }
    },
    methods : {
        create(){
        return axios.post("http://localhost:8080/api/maintenance/create", 
         {
             firstname : this.firstname,
             lastname : this.lastname,
             phonenumber : this.phonenumber,
             credittype : this.credittype,
             expiredate : this.expiredate
            }).then((response) => {
              
              console.log(response.data)
              
            })

        

      }
    }

}
</script>

<style>

#one{
  color: rgba(255, 255, 255, 0.931);
  display: inline-block;
  margin: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

form{
  max-width: 420px;
  margin: 30px;
  background: rgb(209, 205, 205);
  text-align: left;
  padding: 40px;
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
