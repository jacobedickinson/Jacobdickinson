
<template>

<div id="navbar" class="navbar">
    <div class="navbar-brand">
        <div id="facebook"
        class="navbar-item">
            facebook
        </div>
    </div>
    <div class="navbar-end">
        <div class="navbar-item">
           <div class="field">
            <label class="label">Email or Phone</label>
                <div class="control">
                    <input class="input 
                    has-text-white is-small" 
                    id="email" type="text">
                </div>
           </div>
        </div>
        <div class="navbar-item">
           <div class="field">
            <label class="label">Password</label>
                <div class="control">
                    <input class="input is-small" type="text">
                    <div class="forgot"> <a href="#" target="_blank">Forgotten account?</a></div>
                </div>
           </div>
        </div>
        <div class="navbar-item">
            <div class="button is-small">
                Log In
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
a{
    color: #9cb4d8; 
}
@import url('https://fonts.googleapis.com/css?family=Lato:900&display=swap');
.navbar{
        font-family: Helvetica, Arial, sans-serif;
        font-size: 12px;
       background-color: #3b5998;
background-image: linear-gradient(#4e69a2, #3b5998 50%);
}
.forgot{
    color: #9cb4d8;
    font-weight: normal;
     font-size: 12px;
        
}
.label{
        font-size: 12px;
        font-weight: normal;
        color: white
}
.input{
    height: 24px;
    width: 164px;
}
.navbar{
    height: 78px; 
    background-color:#3C5A99;
    
}
#facebook{
    margin-left: 200px;
    color: white;
font-family: 'Lato', sans-serif;
  font-size: 45px; 
     }
#email{
margin-bottom: 1.45em;
    font-size: 12px;
    }
.navbar-end{
    margin-right: 150px;
}

.button{
    margin-top: 5px;
    background-color:#4267b2;
    border: 1px #29487d solid;
    width: 50.47px;
    height: 24px;
    color:white;
    margin-right: 5px;
}



</style>
