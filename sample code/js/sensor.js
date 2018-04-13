var SHAKE_THRESHOLD = 3000;
var watchID;
var last = 0;
var x, y, z, lastx = 0, lasty = 0, lastz = 0;

$(document).on("pagecreate", "#pageone", function () {
	
	//setup listener for the toggle switch
	$("#flipswitch").on("change", function() {
		
		if( $(this).val() == "on" ) startSensor();
        alert("a");
		else if ( $(this).val() == "off" ) stopSensor();
        
	});
});
function startSensor() {
	watchID = navigator.accelerometer.watchAcceleration( accelerometerSuccess, accelerometerError,{frequency:500});
    alert("b");
}
function stopSensor() {
	navigator.accelerometer.clearWatch(watchID);
     alert("c");
} 
function accelerometerSuccess(acceleration) {
    var curTime = new Date().getTime();
    alert("d");
     if ((curTime-last)> 10) {
          var diffTime = curTime -last;
           last= curTime;
           x = acceleration.x;
           y = acceleration.y;
           z = acceleration.z;
           var speed = Math.abs(x +y + z - lastx - lasty - lastz) / diffTime * 10000;
           if (speed > SHAKE_THRESHOLD) {
               alert("e"); 
           }
           lastx = x;
           lasty = y;
           lastz = z;
       }

}

function accelerometerError() {
   alert('Error');
}