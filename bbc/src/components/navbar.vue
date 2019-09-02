<template>
  <div class="navbar">
    <div class="navbar-brand">
      <a href="https://www.bbc.com/">
        <img id="logo" src="https://www.pngkey.com/png/full/337-3372869_bbc-white-bbc-logo-png.png"> 
      </a>
      <a href="#" id="signin" class="navbar-item">
        <img id="signinicon" src="https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png">
        Sign In 
      </a>
      <a href="#" class="navbar-item">
        Home 
      </a>
      <a href="#" class="navbar-item">
        News 
      </a>
      <a href="#" class="navbar-item">
       Sport 
      </a>
      <a href="#" class="navbar-item">
        Reel 
      </a>
      <a href="#" class="navbar-item">
       Worklife 
      </a>
      <a href="#" class="navbar-item">
       Travel 
      </a>
      <a href="#" class="navbar-item">
       Future 
      </a>
       <div class="navbar-item has-dropdown is-hoverable is-white">
        <a id="more" class="navbar-link is-white">
          More
        </a>
        <div class="navbar-dropdown is-white">
          <a class="navbar-item">
           Music
          </a>
          <a class="navbar-item">
           TV
          </a>
          <a class="navbar-item">
           Weather
          </a>
          <a class="navbar-item">
            Sounds
          </a>
        </div>
      </div>
    </div>
      <div class="navbar-item">
       <input class="input" type="text" placeholder="Search">
      </div>
      <div class="search is-success">
      <img src="https://image.flaticon.com/icons/png/512/55/55369.png" style="height: 10px; width: 3px;">
      </div>
<font-awesome-icon icon="address-card" /> 

  </div>
</template>

<script>
  import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'navbar',
  
}
</script>

<style scoped>
.search{

}
#more{
  
  width: 150px;
  color: white;
  margin-left: 20px;
}
#signin{
  width: 150px;
}
#logo{
      margin-left: 170px;
      margin-bottom: 10px;
      height: 25px;
      width: 80px;
      margin-top: 10px;
      margin-right: 20px;
}
.navbar-dropdown{
}
.navbar{
 border-left: 1px solid #ccc;
      border-top: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;
      background-color: black; 
      max-height: 0px;
}
.input{
    border: none;
    background: lightgrey;
    height: 26px;
    width: 168px;
    min-height: 24px;
    font-weight: bold;
    float: left;
    padding: 0 0 0 6px;
    color:white;
    font-weight: bold;
    align-self: center;
    margin-right: 200px;
    
    
}
.navbar-item{
     color: #fff;
     border-left: 1px solid;
     align-content: center;
     margin-left: 2px;
     margin-right: 2px;
         

}
.input{
     border: #333 1px solid;
}
</style>
