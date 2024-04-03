
document.addEventListener("DOMContentLoaded", function () {

  function calculateBearingAndRange(myAircraftBearing, myAircraftRange, secondAircraftBearing, secondAircraftRange) {
    // Convert input bearings to radians
    const myAircraftBearingRad = myAircraftBearing * (Math.PI / 180);
    const secondAircraftBearingRad = secondAircraftBearing * (Math.PI / 180);
  
    // Calculate the relative x and y components of the range
    const myAircraftX = myAircraftRange * Math.sin(myAircraftBearingRad);
    const myAircraftY = myAircraftRange * Math.cos(myAircraftBearingRad);
    const secondAircraftX = secondAircraftRange * Math.sin(secondAircraftBearingRad);
    const secondAircraftY = secondAircraftRange * Math.cos(secondAircraftBearingRad);
  
    // Calculate the relative position vector
    const relativeX = secondAircraftX - myAircraftX;
    const relativeY = secondAircraftY - myAircraftY;
  
    // Calculate the range between the two aircraft
    const range = Math.sqrt(relativeX ** 2 + relativeY ** 2);
  
    // Calculate the bearing from your aircraft to the second aircraft in degrees
    let bearing = (Math.atan2(relativeX, relativeY) * 180) / Math.PI;
    
    // Ensure the bearing is within the range of 0 to 360 degrees
    if (bearing < 0) {
      bearing += 360;
    }
  
    return { bearing: bearing.toFixed(0), range: range.toFixed(0) };
  }
  
  // Establish bullseye values
  let myAircraftBearing = (Math.floor(Math.random() * 36)) * 10;
  let myAircraftRange = (Math.floor(Math.random() * 21)) * 10;
  if (myAircraftRange === 0) {
    myAircraftBearing = 0;
  }

  let secondAircraftBearing = (Math.floor(Math.random() * 36)) * 10;
  let secondAircraftRange = (Math.floor(Math.random() * 21)) * 10;
  if (secondAircraftRange === 0) {
    secondAircraftBearing = 0;
  }
  
  // Calculate the resulting bearing and range
  let result = calculateBearingAndRange(myAircraftBearing, myAircraftRange, secondAircraftBearing, secondAircraftRange);
  

  // Display the values on the webpage
  document.querySelector('#friendlyAzimuth').innerHTML = myAircraftBearing;
  document.querySelector('#friendlyDistance').innerHTML = myAircraftRange;

  document.querySelector('#enemyAzimuth').innerHTML = secondAircraftBearing;
  document.querySelector('#enemyDistance').innerHTML = secondAircraftRange;

  document.getElementById('answer').onclick = function() {
    answer();
    let inputBearing = document.querySelector('#resultAzimuth').value;
    let inputRange = document.querySelector('#resultDistance').value;
    
    if (Math.abs(inputBearing - result.bearing) <= 20 && Math.abs(inputRange - result.range) <= 20) {
      document.querySelector('#feedback').innerHTML = 'Correct!';
    } else {
      document.querySelector('#feedback').innerHTML = 'Wrong! Try Again.';
    }
    
  };

  function answer() {
    document.querySelector('#answerAzimuth').innerHTML = result.bearing;
    document.querySelector('#answerDistance').innerHTML = result.range;
  }
})



