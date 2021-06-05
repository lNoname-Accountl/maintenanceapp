<template>
<form>
    <div>
    <label>Service ID:</label>
    <input type="number" v-model = "servicesearch">
    <h1>Service ID :{{service_id}}</h1>
    <h1>Staff ID :{{staff_id}}</h1>
    <h1>Belongs to Customer ID :{{customer_id}}</h1>
    <h1>Date Request : {{date_rq}}</h1>
    <h1>Plan : {{plan}}</h1>
    <div>
      <button class="submit" @click = "create()">Search</button>
       <button class = "back" @click = "dice()">Back to home</button>
    </div>

    </div>
    

</form>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            service_id : '',
            staff_id : '',
            customer_id : '',
            date_rq : '',
            plan : '',
            servicesearch : ''
        }
    },
    methods : {
        create(){
        return axios.get(`http://localhost:3000/api/request/getRequestbyID/${this.servicesearch}`).then((response) => {
              
              console.log(response.data)
              this.service_id = response.data.service_id
              this.staff_id = response.data.staff_id
              this.customer_id = response.data.customer_id
              this.date_rq = response.data.date_rq
              this.plan = response.data.plan
              
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
  font-weight: regular;
}


h1{
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
