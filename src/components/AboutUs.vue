<template>
    <div>
      <br>
    <h1>About us</h1>
    <br>
    <br>
    <p>Founded in 2020 by Prakasit, Thippawan, Dhorndhan, Kantapon, and Annop. </p>
<p>The fixAble Company, Inc. was formed with one simple goal: provide extremely high-quality customer service at an extremely high price. </p>

<br>
<p>fixable’s headquartered in Norway and established in 6 countries across the globe, in close proximity to our customers. </p>
<p>In our 100 years of global operations, fixAble has become a trusted service provider to the maintenance industry. </p>
<p>This is evidenced by a comprehensive client base and a growing pool of worldwide master service agreements. </p>
<br>
<p>Our team comprises of discipline technicians, talented managers, and well-educated staff. </p>
<p>Our company specialized in maintaining the machine and take care of your broken machines. </p>
<p>Our team of experts is ready to serve you with the absolute best service possible. Of course with an ultra-high price tag. </p>
<p>Our database keeps track of all the problems and error logs that our customers have faced to ensure fast and reliable service. </p>

<br>
<br> 
    <button class="submit" type ="button" v-on:click ="dice()">Back to creation</button>
    </div>
</template>

<script>

export default ({
   methods: {
            dice(){
   
            this.$router.replace({name:"homepage"});
               
            }
        }
})
</script>


<style scoped>

h1{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(0, 0, 0);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 30px;
  font-weight: regular;
}

p{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  text-align: center;
}

button{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: relative;
  left: 46%;
  size: 80px;
  background: rgba(23, 64, 246, 0.924);
  border: 0;
  padding: 20px 30px;
  margin-top: 20px;
  color: rgb(255, 255, 255);
  border-radius: 30px;
  
}


</style>