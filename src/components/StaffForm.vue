<template>
  <form>
    <header>
      <h3>Header</h3>
    </header>
    <br>
    <label>Full Name:</label>
    <input type = "text" required v-model = "fullname">


    <label>ID No.:</label>
    <input type= "number" required v-model = "idno">
    
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
    <select v-model = "role">
      <option value="Manager">Manager </option>
      <option value="Technician">Technician </option>

      <option value="Staff">Staff </option>

    </select>

    <label>Address:</label>
    <input type="text" v-model = "address">

    <label>Email:</label>
    <input type="email" required v-model="email">

    <label>Phone Number:</label>
    <input type="tel" v-model = "phone">

    <label>Branch ID:</label>
    <input type="text" v-model = "branch">
    <br>
    <div class="submit">
      <button>Submit employee information</button>
    </div>

    <p>FullName : {{ fullname }}</p>
    <p>IDNo. : {{ idno }}</p>
    <p>Role. : {{ role }}</p>
    <p>Address : {{ address }}</p>
    <p>Gender : {{ gender }}</p>
    <p>Email : {{ email }}</p>
    <p>PhoneNumber : {{ phone }}</p>
    <p>Branch : {{ branch }}</p>

  </form>
  
</template>

<script>
export default {
    data() {
        return {
            fullname : '',
            idno : '',
            role: '',
            address : '',
            gender:'',
            email : '',
            phone : '',
            branch : ''
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

label, header{
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

