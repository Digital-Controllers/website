<script src="../../assets/javascripts/calculator.js"></script>

# Bullseye Calculator

<h4>Your Bullseye:</h4>
<form action="">
  <input id="friendlyAzimuth" type="number">
  <input id="friendlyDistance" type="number">
</form>
<h4>Target Bullseye:</h4>
<form action="">
  <input id="enemyAzimuth" type="number">
  <input id="enemyDistance" type="number">
</form>
<br>
<input id="answer" type="button" value="Submit">
<p>Bearing and Range to target:</p>
<div id="info">
  <h5 id="resultAzimuth">---</h5><h5 id="resultDistance">---</h5>
</div>
<form id="refresh" action="">
  <input type="submit" value="Refresh">
</form>