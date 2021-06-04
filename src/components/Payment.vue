<template>
  <form >
    <header>
      <h3>Payment</h3>
    </header>
    <br>
  <label>Receipt Number</label>
  <input 
  oninput="javascript: if (this.value.length != this.maxLength) this.value = this.value.slice(0, this.maxLength);"
  type = "number"
  maxlength = "11"
  v-model= "receipt_number" 
  required
  />
  <label>Service ID</label>
  <input type="number" v-model = "service_id" required>
  <label>Date</label>
  <input type="date" v-model = "receipt_date" required>
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
    data(){
        return{
             receipt_number:'',
             service_id:'',
             receipt_date: ''
            
        }
       
        
    },
    methods: {
      create(){
        return axios.post("http://localhost:3000/api/receipt/create", 
         {
             receipt_number : this.receipt_number,
             service_id : this.service_id,
             receipt_date : this.receipt_date
            }).then((response) => {
              
              console.log(response.data)
              this.receipt_number = ''
              this.service_id = ''
              this.receipt_date = ''
              
            })

        

      },
      dice(){
   
            this.$router.replace({name:"homepage"});
               
            }
    }

}
</script>


<style scoped >

#one{
  color: rgba(255, 255, 255, 0.931);
  display: inline-block;
  margin: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
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

h3{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(0, 0, 0);
  text-align: center;
  text-transform: uppercase;
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