<template>
  <form>
    
  <label>Branch ID</label>
  <input type="text" required v-model = "branchid" >

  <label>Branch Name</label>
  <input type="text" required v-model = "branchname" >

  <label>Branch Phone</label>
  <input type="text" required v-model = "branchphone" >

  <label>Branch Address</label>
  <input type="text" required v-model = "branchaddress" >

  <br>
    <div class="submit">
      <button>Submit branch information</button>
    </div>

   <p>ID : {{ branchid }}</p>
    <p>Name. : {{ branchname }}</p>
    <p>Phone. : {{ branchphone }}</p>
    <p>Address : {{ branchaddress }}</p>
 


  </form>
</template>

<script>
export default {
    data() {
        return {
            branchid : '',
            branchname : '',
            branchphone : '',
            branchaddress : ''
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