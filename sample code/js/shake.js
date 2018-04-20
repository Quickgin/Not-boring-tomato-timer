$(document).on("pagecreate", "#pageone", function () {

    alert("pageone created");
    
	//setup listener for the toggle switch
	$("#flipswitch").on("change", function(event) {
		
       if(this.value == "on" ) {
            startSensor();
           console.log("on");
        }
		else
        {
            stopSensor();
            console.log("off");
        }
        

	});
});
function startSensor() {
shake.startWatch(onShake，40，onError);
}
function stopSensor() {
shake.stopWatch();
} 
var onShake = function () {
  // Fired when a shake is detected
    alert("haha");
};

var onError = function () {
  // Fired when there is an accelerometer error (optional)
    
    alert('Error');
};