<template>
<div class="newsbody">
    <div class="header">
    <div id="one"> Welcome to BBC.com</div>
    <div id="two">Thursday, 29 August</div>
    </div>
    <div class="gridmain">
       <div class="rocket">
           <img src="https://cnet2.cbsistatic.com/img/wSdWTfHKOjtQ1Q-ogybNjEEO5gE=/1600x900/2017/11/01/c6e4e7df-07d1-4d53-838e-6eceed8434ef/fheavy-product-page1.jpg" alt="">
            <p class="headline"> Wow look at the rocket go much fast</p>
           <p class="bottom-left">new rocket launched and it's going really fast.</p>
           <p class="colourlabel">|</p>  <p class="label"> FUTURE </p>
           </div>
           <div class="gridside">
               <div class="container">
                <img src="https://wallpapercave.com/wp/oYO2pzI.jpg" alt="">
                <p class="headline1"> Sloths on the loose</p>
           <p class="colourlabel1">|</p>  <p class="label1"> POLITICS </p>        
               </div>
               <div class="container2">
                <img src="https://wallpapercave.com/wp/oYO2pzI.jpg" alt="">   
                  <p class="headline1"> Sloths on the loose</p>
           <p class="colourlabel1">|</p>  <p class="label1"> POLITICS </p>        
               </div>
           </div>
           <div class="gridside">
               <div class="container">
                <img src="https://wallpapercave.com/wp/oYO2pzI.jpg" alt="">  
                  <p class="headline1"> Sloths on the loose</p>
           <p class="colourlabel1">|</p>  <p class="label1"> POLITICS </p>         
               </div>
               <div class="container2">
                <img src="https://wallpapercave.com/wp/oYO2pzI.jpg" alt=""> 
                  <p class="headline1"> Sloths on the loose</p>
           <p class="colourlabel1">|</p>  <p class="label1"> POLITICS </p>          
               </div>
           </div>
    </div>
</div>
</template>

<script>
export default{

}
</script>

<style scoped>
.gridside{
    display: grid;
    grid-template-rows: 2fr;
    grid-template-columns: 1fr;
    grid-gap: -10px;
}
.label{
     color:#d3d3d3;
     bottom: -1px;
     position: absolute;
     text-align: center;
     margin-left: 28px;
}
.label1{
     color:#d3d3d3;
     bottom: -27px;
     position: absolute;
     text-align: center;
     margin-left: 28px;
}
.container {
    width: 272px;
    height: 120px;
    grid-template-rows: 1fr;
    grid-template-columns: 100px 100px;
    margin-left: 10px;
      position: relative;
  text-align: center;

}
.container2 {
    width: 272px;
    height: 120px;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    margin-bottom: 48px;
    margin-left: 10px;
    margin-top: 42px;
      position: relative;
  text-align: center;
    
}
/* resize */
.container img {
    width: 200%;
    height: auto;
}
.colourlabel{
  position: absolute;
  bottom: 0px;
  left: 16px;
  color: red;
}
.colourlabel1{
  position: absolute;
  bottom: -25px;
  left: 16px;
  color: black;
}
.headline{
font-size: 1.75rem;
color: white;
position: absolute;
  bottom: 50px;
  left: 16px;
}
.headline1{
font-size: 1.125rem;color: white;
position: absolute;
  bottom: 0px;
  left: 16px;
}
.rocket{
   
  position: relative;
  text-align: center;
}
.bottom-left {
  position: absolute;
  bottom: 30px;
  left: 18px;
  color:#ffff
}
.gridmain{
display: grid;
grid-template-rows: 300px;
grid-template-columns:550px 300px 300px ;
margin-right: 200px;
grid-column-gap: 0px;
}

.newsbody{
margin-left: 170px;
margin-top: 30px;
    
}
.header{
display: grid;
grid-template-rows: 20px 20px;
grid-template-columns: 500px 800px;
width: 100%;

}
.newsbody{
  display: grid;
}

#one{
color: #4a4a4a;
font-weight: bold;
font-size: 1.375rem;
}
#two{
color: #8c8c8c;
font-weight: normal;
font-size: 1.375rem;
font-weight: normal;
margin-left: 427px;
}

</style>