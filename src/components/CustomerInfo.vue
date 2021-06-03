<template>
<form>
<header>
  <h3>Customer Information</h3>
</header>
<br>
<label>First Name</label>
<input type="text" required v-model="first_name">
<label>Last Name</label>
<input type="text" required v-model="last_name">
<label>Phone Number</label>
<input type="text" required v-model = "phone_number">
<label>Credit Card Type</label>
    <select v-model = "credit_card_type" required>
      <option value="" disabled selected>Select your plan</option>
      <option value="visa">Visa </option>
      <option value="mastercard">Master Card </option>
    </select>
<label>Expiration Date</label>
<input type="date" v-model = "credit_card_exp " required>
<label>Credit Card Number</label>
<input type="number" required v-model = "credit_card_number">
<br>
    <div class="submit" @click = "create()">
      <button>Submit Info</button>
    </div>
</form>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            first_name : '',
            last_name : '',
            phone_number : '',
            credit_card_type : '',
            credit_card_exp  : '',
            credit_card_number : ''
         
        }
    },
    methods : {
        create(){
        return axios.post("http://localhost:3000/api/customer/create", 
         {
             first_name : this.first_name,
             last_name : this.last_name,
             phone_number : this.phone_number,
             credit_card_type : this.credit_card_type,
             credit_card_exp : this.credit_card_exp,
             credit_card_number : this.credit_card_number
            }).then((response) => {
              
              console.log(response.data)
              
            })

        

      }
    }

}
</script>

<style scoped>


form{
  max-width: 420px;
  margin: 30px;
  background: rgb(209, 205, 205);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  position: relative;
  left: 570px;
  
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
