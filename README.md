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

-----------------------------------------------

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