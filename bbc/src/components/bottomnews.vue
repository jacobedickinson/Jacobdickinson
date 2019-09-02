<template>
<div class="feed">   
<div class="bottomnews">
     <p class="colourlabel">|</p>
<div id="news" class="title">NEWS</div>
</div>
<div class="features">
<div class="newsfeature">
    <div class="container">
        <img src="https://pbs.twimg.com/media/CKp6zxqUYAEgiR3.jpg" alt="">
        <div class="titles1">
        <div class="newstitle">We got the best damn memes on the interweb</div>
        <div class="description">Dank memes are currently in very short supply - as a result we started manufactoring </div>
              
            </div>   
         </div>
        </div>
<div class="newsfeature">
    <div class="container">
                <img src="https://pics.me.me/when-you-gethit-with-a-stun-grenade-a-gaming-memes-3464300.png" alt="">
                <div class="titles">
                    <div class="newstitle">We got the best damn memes on the interweb</div>
        <div class="description">Dank memes are currently in very short supply - as a result we started manufactoring </div>      
               </div>
                </div>
            
</div>
    <div class="newsfeature">
        <div class="container">
            <img src="https://www.dictionary.com/e/wp-content/uploads/2018/03/dank-meme.jpg" alt="">
          <div class="titles2">
                    <div class="newstitle">We got the best damn memes on the interweb</div>
        <div class="description">Dank memes are currently in very short supply - as a result we started manufactoring </div>      

        </div>
     </div>
    </div>
    </div>
    
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.newsinfo{
    display: grid;
      grid-template-columns: 400px 400px 400px ;
    grid-template-rows: 20px 20px 20px;
}
.titles1{
    margin-top: -5px;
}
.titles{
    margin-top: -20px
}
.details{
    margin-left:-180px; 
    margin-top: 0px;
    position: absolute;
;
}
.colourlabel1{
  color: orange;
    max-width: 5px;
    max-height: 1px;
    margin-top: 12px;
     margin-left: -230px;
}
.label1{
     color:#d3d3d3;
     max-width: 20px;
     margin-top: 10px;
     max-height: 1px;

}
.newstitle{
    font-weight: bolder;
    font-size: 1.25rem;
    color:#212121;
}
.newsfeature{
 align-self: auto;
}

.container {
    width: 372px;
    height: 120px;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    margin-bottom: 48px;
    margin-left: 10px;
    margin-top: 42px;
      position: relative;
    
}
/* resize */
.container img {
    width: 200%;
    height: auto;
}
.features{
    display: grid;
    grid-template-columns: 400px 400px 400px;
    grid-template-rows: 200px 200px 200px;
    margin-left: 170px;

}
.newsfeature{
margin-top: -40px;
}
.bottomnews{
    margin-left: 170px;
    display: inline;

}
#news{
    font-size: 1.5rem;
    font-family: Arial,Helvetica,freesans,sans-serif;
    font-weight: bold;
    margin-left: 180px;
    margin-top: -27px;

}
.colourlabel{
      margin-left: 170px;
      color: red;
      margin-top: 20px;
      font-size: 20px;
      font-weight: bolder;
}
.title2{
margin-left: 180px;
    margin-top: 20px;
    font-size: 0.875rem;
    color: #767676;
    font-weight: lighter;

}
</style>