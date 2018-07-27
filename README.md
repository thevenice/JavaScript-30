<h1>#JavaScript-30 logs:<h1>
<h2>Day 1 : Drum sounds with keyboard</h2>
     <h3>explanation of program:</h3>
      <h4> What this program is doing?<h4>
      <p>
     -this script connects one of my key and an audio file with a attribute data-key.<br/>
     -this thing happens within html but the transition that we have sync with over keys is inside css.<br/>
     -we made a class in css 'playing' that contains styling, that applies only if transition happen.<br/>
     -so we added class 'playing' in script, that adds styling while we use the key.<br/>
     -but we have to remove that styling after specific time.<br/>
     -so we added foreach into keys and removed that class at that specific time.<br/>
     -so this makes our display program like a buzzer as soon as i press it become red for specific time.<br/>
     </p>

---

<h2>Day 2 : Clock with real time and animation</h2>
     <h3>explanation of program:</h3>
      <h4> What this program is doing?<h4>

<p>
  -we have to make function inside <br/>
  -we have to rotate the 3 clock hands with respect to now time <br/>
  -and make rotate at their respective degree<br/>
  -we grabbed [((sec,min,hour) hands] from thier divs<br/>
  -we grabbed current date(nowDate)<br/>
  -we made 3 variable with to get current value of [(sec,min,hour) using nowDate.getX()] <br/>
  -we made 3 more variables to get degrees of [(sec,min,hour) using ((varOfCurrValue/60)*360)+90]<br/>
  -we calculated degs+ patched default L-R rotation problem to +90deg<br/>
  -now we add style in tranform element of [((sec,min,hour) hands]<br/>
  -we add value of var we created to get rotation degs in styles. <br/>
  </p>
         <h2>i will update soon about day 3 to 9 </h2>
<h2>Day 10 : CheckBoxes with Multi-Selection </h2>
     <h3>explanation of program:</h3>
      <h4> What this program is doing?<h4>
  <p>
    - -----------------cb fn  for mouse event---------------/<br>
    - we will pass a callback fn for event<br>
    -  now inside fn we will give lastChecked value of this<br>
    - LASTCHECKED will give us log of which item we clicked last time<br>
    - or we can say which item get iterate through the function<br>
    - if(this.check)console.log(this.checked) will provide as alert <br>
    - if anything get checked it alert true in console<br>
    - so we will add another functionality in this<br>
    - we will verify if (e.shitkey) is used with click then log back true<br>
    - now we now get alert only while we check using(shiftkey+click)<br>
    - now we are getting data back for functionality that we want<br>
    - we will create now a element that can log whats between them<br>
    - now we have to declare a variable inBetween with value of false;<br>
    - make sure we wont use const because we will mutate this var.<br>
    - we declare a var called lastChecked without value out now yes now<br>
    - after declare lastcheck wont work <br>
    - now inside theloop we will comment out the console.log(this.checked)<br>
    -  and we will loop Checkboxes inside if statement <br>
    - we will verify that if check = this or check=lastchecked<br>
    - if this statement is true it will change inBetween value<br>
    - we will give inBetween=!inBetween<br>
    -  means it will automate betwwen true and false itself<br>
    - and if inbetween is active we pass value true for check(item).checked<br>
    - more instruction inside day10 folders index.html file
     </p>
