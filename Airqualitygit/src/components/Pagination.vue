<template>
<div class="page">
  <nav class="pagination" role="navigation" aria-label="pagination">

  <ul class="pagination-list">
    <li>
      <a class="pagination-link" @click="fetchData(1)" aria-label="Goto page 1">1</a>
      <a class="pagination-link" @click="fetchData(2)" aria-label="Goto page 1">2</a>
      <a class="pagination-link" @click="fetchData(3)" aria-label="Goto page 1">3</a>
      <a class="pagination-link" @click="fetchData(4)"  aria-label="Goto page 1">4</a>
    </li>
      </ul>
</nav>
</div>
</template>

<script>
import axios from "axios";

export default{
     data(){
        return{
        pageResults: [],

    } 
  },
  created () {
    this.fetchData()
  },
  methods:{
  
  fetchData(page) {
    const self = this
  axios.get('https://api.openaq.org/v1/countries',{
   params: {
   page:page,
   limit: 20
    }
  })
  .then(function (response) {
   self.$store.commit('changeCountry', response.data.results)
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })

    }
  }
}



</script>

<style  scoped>

.page{
    margin-left: 1em;
    margin-right: 1em;
}
</style>