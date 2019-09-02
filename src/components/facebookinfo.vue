<template>
<div class="facebook">
   <div class="info has-text-weight-bold">
       Facebook helps you connect and share with the people in your life.
      <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/OBaVg52wtTZ.png?_nc_x=Ij3Wp8lg5Kz" alt="">
   </div>
  <div class="signup">
     <div id="createaccount" class="has-text-weight-bold"> Create an account </div> 
     <div> It's quick and easy. </div> 
  </div>
  <div></div>
  <div class="signupform">
      <div class="names">
    <input id="firstname" class="input" type="text" placeholder="First Name"> 
    <input id="secondname" class="input" type="text" placeholder="Surname">
</div>
<div class="inputboxes">
        <input class="input" type="text" placeholder="Mobile number or email address">
        <input class="input" id="newpass" type="text" placeholder="New password">
</div>
<div class="birthday">
<p class="birthday1"> Birthday </p>
<div></div>
<div></div>
<div class="field" id="date" >
  <div class="control">
    <div class="select is-small" label="birthday">
      <select>
        <option>Day</option>
        <option>1</option>
      </select>
    </div>
  </div>
</div>
<div class="field" id="month" >
  <div class="control">
    <div class="select is-small" label="birthday">
      <select>
        <option>Month</option>
        <option>Jan</option>
      </select>
    </div>
  </div>
</div>
  <div class="field" id="year" >
      <div class="control">
        <div class="select is-small" label="birthday">
            <select>
              <option>Year</option>
              <option>1998</option>
            </select>
        </div>
                    <p class="button is-small is-size-7	 has-text-weight-bold" id="questionmark"> ? </p>

      </div>
   </div>
</div>
</div>
<div></div>
  <div class="gender">
    <div>Gender</div>
      <input class="is-checkradio" id="exampleRadioInline1" type="radio" name="exampleRadioInline" checked="checked">
       <label for="exampleRadioInline1" id="radiobox"> Male   </label>
      <input class="is-checkradio" id="exampleRadioInline2" type="radio" name="exampleRadioInline">
        <label for="exampleRadioInline2" id="radiobox"> Female   </label>
      <input class="is-checkradio" id="exampleRadioInline2" type="radio" name="exampleRadioInline">
        <label for="exampleRadioInline2" id="radiobox" > Custom</label>
                            <p class="button is-small is-size-7 has-text-weight-bold" id="questionmark2"> ? </p>

    <br>
    <br>
    <div class="termsandconditions">
     By clicking Sign Up, you agree to our <a href="" target="_blank">Terms</a>. Learn how we collect, use and share your data in our <a href="" target="_blank">Data Policy</a>and how we use cookies and similar technology in our <a href="" target="_blank">Cookie Policy</a>. You may receive SMS notifications from us and can opt out at any time.
</div>
<br>
  <class class="button" id="signup">Sign Up </class>
</div>

</div>
</template>

<script> 
export default{
}
</script>


<style scoped>
#questionmark{
  margin-left: 10px;
  margin-top: 5px;
  height: 16px;
  width: 19px;
  border-radius: 100%;
  border: 1px grey;
  background-color: grey;
  color: white;
  


}
#questionmark2{
  margin-left: 0px;
  margin-top: 5px;
  height: 16px;
  width: 19px;
  border-radius: 100%;
  border: 1px grey;
  background-color: grey;
  color: white;
  


}
#signup{
    width: 185px;
    height: 40px; 
    color: white;
    background: linear-gradient(#67ae55, #578843);
    background-color: #69a74e;
    box-shadow: inset 0 1px 1px #a4e388;
    padding: 7px 20px;
    text-align: center;
    border-color: #3b6e22 #3b6e22 #2c5115;
        border: 1px solid;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    letter-spacing: 1px;
    position: relative;
    text-shadow: 0 1px 2px rgba(0,0,0,.5);
}
.termsandconditions{
       color: #777;
    font-size: 10px;
    width: 316px;

}
#radiobox{
        color: #1d2129;
    font-size: 18px;
    font-weight: normal;
    line-height: 18px;
    padding: 0 10px 0 3px;
}
.gender{
    margin-left: 120px;
    margin-top: -275px;
    color: #90949c;
    font-size: 16px;
    font-weight: bold;
   grid-auto-flow: row;
}

#date{
    width: 60px;
}
#month{
        margin-left: -140px;
}
#year{
        margin-left: -265px;

}
.field{
    margin-top:-150px;
     


}
.birthday1{
    color: #90949c;
    font-size: 16px;
    font-weight: bold;
}

.birthday{
    color:#90949c;
    margin-top: -250px;
    display: grid;
      grid-template-columns: 1fr 1fr 1fr;
}
.input{
    border-color: #cddeee;
}
#newpass{
    margin-top: 7px
}
.inputboxes{
    margin-top: -240px;
    width: 407px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
 grid-row-gap: 200px; 

}
.facebook{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,242,246,1) 35%);
}
.info{
  margin-left: 210px;  
  margin-top: 50px;
  grid-column: 1fr;
  grid-row: 1fr;
      color: #0e385f;
    font-size: 20px;
    font-weight: bold;
    line-height: 29px;

}
.signup{
    margin-top: 30px;
    margin-left: 120px;

}

#createaccount{
    font-size: 36px;
    color:#333;
}

.signupform{
    margin-left: 120px;
    display: grid;
    grid-template-columns: 1 fr 1fr;
}
.names{
    width: 406.5px;
    height: 36px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 7px;
      margin-top: -185px;

}

</style>