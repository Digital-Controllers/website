
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
  };
  
  // Create submit button function
  document.getElementById('answer').onclick = function() {

    // Pull input values
    let myAircraftBearing = document.querySelector('#friendlyAzimuth').value;
    let myAircraftRange = document.querySelector('#friendlyDistance').value;
  
    let secondAircraftBearing = document.querySelector('#enemyAzimuth').value;
    let secondAircraftRange = document.querySelector('#enemyDistance').value;

    // Calculate result
    let result = calculateBearingAndRange(myAircraftBearing, myAircraftRange, secondAircraftBearing, secondAircraftRange);

    // Display result
    document.querySelector('#resultAzimuth').innerHTML = result.bearing;
    document.querySelector('#resultDistance').innerHTML = result.range;
  };

})



