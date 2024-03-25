<script src="../../assets/javascripts/trainer.js"></script>


# DCS Bullseye Trainer

<h4>Your present position is:</h4>
<div>
  <h5>Bullseye </h5><h5 id="friendlyAzimuth">0</h5><h5 id="friendlyDistance">0</h5>
</div>
<h4>Enemy aircraft position:</h4>
<div>
  <h5>Bullseye </h5><h5 id="enemyAzimuth">0</h5><h5 id="enemyDistance">0</h5>
</div>
<p>What is your Bearing(+/- 20) and Distance(+/- 20) to the enemy aircraft?</p>
<form action="">
  <input id="resultAzimuth" type="number" name="degrees">
  <input id="resultDistance" type="number" name="miles">
  <input id="answer" type="button" value="Submit">
</form>
<div>
  <h5>Answer: </h5><h5 id="answerAzimuth">---</h5><h5 id="answerDistance">---</h5>
</div>
<div>
  <h5 id="feedback"></h5>
</div>
<form id="refresh" action="">
  <input type="submit" value="Refresh">
</form>