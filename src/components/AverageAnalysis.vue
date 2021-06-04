<template>
    <div>
    <h1>Overall Score : {{all_score}}</h1>
    <div >
      <button class="submit" @click= "create()">Submit</button>
      <button class="back" type ="button" v-on:click ="dice()">Back to home</button>
    </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            all_score : ''
        }
    },
    methods: {
        create(){
        return axios.get(`http://localhost:3000/api/feedback/getAvgScore`).then((response) => {
              
              console.log(response.data)
              this.all_score = response.data.Overallscore
              
            })

        },
        dice(){
   
            this.$router.replace({name:"homepage"});
               
            }
    }
}
</script>

<style>

</style>