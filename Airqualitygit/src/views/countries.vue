<template>
  <div id="home" class="cities">
    <div class="title">Click on the countries below to see their data</div>
    <p>Our community has collected 466,417,552 air quality measurements from 10,494 locations in 75 countries. Data are aggregated from 124 government level and research-grade sources.
  </p>
      <p v-if="loading">Loading...</p>
    <div v-else>
      <ul>
        <li v-for="item in results" class="button" @click="loadCities(item.code)">{{ item.name }} </li>
      </ul>     
    </div>
     <th> City Name </th>
     <th> Count </th> : 
  <div v-for="item in arrayOfCities">
     <td> {{'City =' + item.city}} </td>   
      <p> {{'Count=' + item.count}} </p>    
      </div>   
    <Pagination></Pagination>
  </div>
</template>
<script>
import axios from "axios";
import Pagination from '../components/Pagination.vue';
import {mapState} from 'vuex'
export default{
   components: {
      Pagination
    },
  data(){
    return{
      loading: false,
      arrayOfCities: [],

    } 
  },
  computed: {

  },
  created () {
    this.fetchData()
  },
  computed:{
    results(){
      return this.$store.state.countries;
    }
  },
  methods:{
    loadCities(code){
      const self = this
      console.log(code)
      axios.get(`https://api.openaq.org/v1/cities?country=${code}`)
        .then(function (response) {
          //console.log(response);
          self.arrayOfCities = response.data.results
          console.log(self.arrayOfCities)
    })
    .catch(function (error) {
      console.log(error);
      })
      .finally(function () {
      });
    },
  }
}


</script>
<style scoped>
.title{
    border-bottom: 1px solid #B4A796!important; 
    border-bottom-width: 30px;
}
li{
    margin: 10px;

}

 html, body {
  text-align: center;
  padding-top: 40px;
  
  -webkit-perspective: 700px;
     -moz-perspective: 700px;
      -ms-perspective: 700px;
          perspective: 700px;
}

/* Reset */
.button {
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: 0;
  -webkit-appearance: none;
}

/* Custom */
.button {
  display: inline-block;
  position: relative;
  padding: 20px 38px;
  top: 0;
  font-size: 30px;
  font-family: "Open Sans", Helvetica;
  border-radius: 4px;
  border-bottom: 1px solid rgba( 28, 227, 125, 0.5 );
  background: #B4A796;
  color: #e1e1e1;
  box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.1 );
  
  -webkit-transform: translateZ(0);
     -moz-transform: translateZ(0);
      -ms-transform: translateZ(0);
          transform: translateZ(0);
  
  -webkit-transition: all 0.2s ease;
     -moz-transition: all 0.2s ease;
      -ms-transition: all 0.2s ease;
          transition: all 0.2s ease;
}

.button:hover {
  top: -10px;
  box-shadow: 0px 10px 10px rgba( 15, 165, 60, 0.2 );
  -webkit-transform: rotateX(20deg);
     -moz-transform: rotateX(20deg);
      -ms-transform: rotateX(20deg);
          transform: rotateX(20deg);
}

.button:active {
  top: 0px;
  box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.0 );
  background: rgba( 20, 224, 133, 1 );
}

</style>